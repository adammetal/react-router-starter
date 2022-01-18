import styled from "styled-components";
import { Link } from "react-router-dom";

const Nav = styled.nav`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
`;

const NavBar = () => (
  <Nav>
    <Link to="/">Home</Link>
    <Link to="/cat-farm">Cat Farm</Link>
    <Link to="/cat-store">Cat Store</Link>
  </Nav>
);

export default NavBar;
