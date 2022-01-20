import { useEffect, useState } from "react";
import styled from "styled-components";
import YesNoBtn from "./YesNoBtn";

const CatBox = styled.div`
  padding: 2rem;
  border: 2px solid black;
  border-radius: 3px;
`;

const CatImage = (props) => {
  return (
    <div>
      <img src={props.src} alt="cat" />
    </div>
  );
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
    // TODO: save kitten to local storage
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
