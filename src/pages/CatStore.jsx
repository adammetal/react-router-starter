import styled from "styled-components";
import CatDisplay from "../components/CatDisplay";

const Flex = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`

const CatStore = () => (
  <Flex>
    <h1>Cat Store</h1>
    <CatDisplay />
  </Flex>
);

export default CatStore;
