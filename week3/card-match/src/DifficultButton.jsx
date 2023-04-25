import styled from "styled-components";

const DifficultButton = ({ difficulty, handleDifficulty }) => {
  return <StyledButton onClick={handleDifficulty}>{difficulty}</StyledButton>;
};

const StyledButton = styled.button`
  margin: 10px;
  padding: 10px;
  background-color: pink;
  border: none;
  border-radius: 5px;
  font-weight: bold;
  &:focus {
    outline: 4px auto -webkit-focus-ring-color;
  }
  &:hover {
    color: pink;
    background-color: white;
  }
`;

export default DifficultButton;
