import styled from 'styled-components';
import { useState, useEffect } from 'react';
import Store from '../lib/store/store';

const Grid = styled.div`
  display: grid;
  gap: 1rem;
  grid-template-columns: 1fr 1fr 1fr;
  margin: 1rem;
`;

const Card = styled.div`
  border: 2px solid black;
`;

const Img = styled.img`
  width: 100%;
`;

const CatCard = (props) => (
  <Card>
    <Img src={props.url} />
  </Card>
)

const CatGrid = () => {
  const [cats, setCats] = useState([]);

  useEffect(() => {
    const farm = new Store('farm');
    setCats(farm.load([]));
  }, []);

  return (
    <Grid>
      {cats.map((cat) => {
        return <CatCard url={cat.url} key={cat.id} />
      })}
    </Grid>
  )
}

export default CatGrid;
