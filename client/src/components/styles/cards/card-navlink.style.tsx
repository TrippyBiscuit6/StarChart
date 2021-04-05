import { NavLink } from "react-router-dom";
import styled from "styled-components";

const StyledLink = styled(NavLink)`
  text-decoration: none;
  font-family: "Lexend", sans-serif;
  color: white;
  border: 1px solid white;
  width: 25%;
  text-align: center;
  padding: 4px 0;
  transition: all 0.5s;
  &:hover {
    color: gold;
    border: 1px solid gold;
  }
`;

export default StyledLink;
