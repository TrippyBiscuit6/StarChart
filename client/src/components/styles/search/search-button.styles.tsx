import styled from "styled-components";

const StyledButton = styled.button`
  display: flex;
  justify-content: center;
  background-color: #282828;
  border: 1px solid gold;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  font-size: 16px;
  transition: all 0.5s;
  padding: 8px 16px;
  cursor: pointer;
  border-radius: 4px;
  margin: 0 16px;
  font-family: StarJedi;
  letter-spacing: 1px;
  &:hover {
    box-shadow: 0 12px 16px 0 rgba(0, 0, 0, 0.24),
      0 17px 50px 0 rgba(0, 0, 0, 0.19);
    background-color: gold;
    border: 1px solid #282828;
    color: #282828;
  }
  @media (max-width: 768px) {
    padding: 8px;
    margin: 16px 0;
  }
`;

export default StyledButton;
