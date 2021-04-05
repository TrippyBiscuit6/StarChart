import { NavLink } from "react-router-dom";
import styled from "styled-components";

const StyledLink = styled(NavLink)`
  text-decoration: none;
  padding: 4px 16px;
  margin: 0 8px;
  transition: all 0.5s;
  font-family: Star Jedi;
  border: 1px solid white;
  &:link,
  &:visited {
    color: white;
  }
  &:hover,
  &:active {
    color: gold;
    border: 1px solid gold;
  }
`;

export default StyledLink;
