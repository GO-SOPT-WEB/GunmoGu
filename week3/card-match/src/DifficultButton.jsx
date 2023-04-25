import styled from "styled-components";
import { useState } from "react";

const DifficultButton = ({ difficulty, handleDifficulty, clicked }) => {
  return (
    <StyledButton
      className={`${clicked ? "clicked" : ""}`}
      onClick={handleDifficulty}
    >
      {difficulty}
    </StyledButton>
  );
};

const StyledButton = styled.button`
  margin: 10px;
  padding: 10px;
  background-color: pink;
  border: none;
  border-radius: 5px;
  font-weight: bold;
  box-shadow: rgb(229, 209, 250) 0.3rem 0.3rem 0.3rem;

  &:hover {
    color: pink;
    background-color: white;
  }
  &.clicked {
    color: pink;
    background-color: white;
  }
`;

export default DifficultButton;
