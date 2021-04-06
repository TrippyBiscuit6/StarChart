import styled from "styled-components";

const StyledGrid = styled.article`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin: 0;
  padding: 16px 0;
  background-color: #282828;
  @media (max-width: 1444px) {
    padding-bottom: 128px;
  }
  @media (min-width: 1920px) {
    width: 75%;
    margin: 0 auto;
  }
`;

export default StyledGrid;
