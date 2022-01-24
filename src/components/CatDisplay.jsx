import { useEffect, useState } from "react";
import styled from "styled-components";
import YesNoBtn from "./YesNoBtn";

const CatBox = styled.div`
  padding: 2rem;
  border: 2px solid black;
  border-radius: 3px;
  max-width: 50%;
  width: 50%;
  height: 80%;
  max-height: 80%;
`;

const Img = styled.img`
  width: 100%;
`;

const CatImage = (props) => {
  return <Img src={props.src} alt="cat" />;
};

const CatDisplay = () => {
  const [cat, setCat] = useState({});
  const [loading, setIsLoading] = useState(true);

  const fetchRandomKitten = async () => {
    setIsLoading(true);

    const response = await fetch("https://api.thecatapi.com/v1/images/search");
    const json = await response.json();

    setCat({
      id: json[0].id,
      url: json[0].url,
    });

    setIsLoading(false);
  };

  useEffect(() => {
    fetchRandomKitten();
  }, []);

  const handleYes = () => {
    const farmRaw = localStorage.getItem("farm") ?? "[]";
    const farmArr = JSON.parse(farmRaw);

    farmArr.push({ ...cat });

    localStorage.setItem("farm", JSON.stringify(farmArr));

    fetchRandomKitten();
  };

  const handleNo = () => {
    fetchRandomKitten();
  };

  return (
    <CatBox>
      {loading === true ? (
        <h1>Loading....</h1>
      ) : (
        <>
          <CatImage src={cat.url} />
          <YesNoBtn onYes={handleYes} onNo={handleNo} />
        </>
      )}
    </CatBox>
  );
};

export default CatDisplay;
