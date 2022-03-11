import useNetworkRequest from "../../hooks/useNetworkRequest";
import styled from "styled-components";
import YesNoBtn from "../YesNoBtn";
import ArrayStore from "../../lib/store/array-store";

const CAT_API = "https://api.thecatapi.com/v1/images/search";

const catDataMapper = (data) => ({
  id: data[0].id,
  url: data[0].url,
});

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
  const [cat, loading, fetchRandomKitten] = useNetworkRequest(CAT_API, catDataMapper);

  const handleYes = () => {
    const farm = new ArrayStore('farm');
    farm.push({ ...cat });
    fetchRandomKitten();
  };

  const handleNo = () => {
    const sad = new ArrayStore('sad-farm');
    sad.push(({ ...cat }));
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
