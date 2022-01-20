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
  const cat = {
    id: "MTY0MTM2NQ",
    url: "https://cdn2.thecatapi.com/images/MTY0MTM2NQ.gif",
  };

  return (
    <CatBox>
      <CatImage src={cat.url} />
      <YesNoBtn />
    </CatBox>
  );
};

export default CatDisplay;
