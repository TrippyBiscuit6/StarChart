import styled from "styled-components";

const StyledButtonGroup = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: StarJedi;
  letter-spacing: 1px;
  font-size: 24px;
  color: gold;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export default StyledButtonGroup;
