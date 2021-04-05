import styled from "styled-components";

const StyledInput = styled.input`
  width: 35%;
  height: 25px;
  text-align: center;
  border: 4px solid #282828;
  border-radius: 4px;
  outline: none;
  transition: all 0.5s ease-in-out;
  &:focus {
    border: 4px solid gold;
  }
`;

export default StyledInput;
