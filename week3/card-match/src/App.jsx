import { useState } from "react";
import "./App.css";
import DifficultButton from "./DifficultButton";
import Header from "./Header";
import { Normalize } from "styled-normalize";
import styled from "styled-components";

function App() {
  const EASY_COUNT = 5;
  const NORMAL_COUNT = 10;
  const HARD_COUNT = 15;

  const [score, setScore] = useState(0);
  const [count, setCount] = useState(EASY_COUNT);
  const [difficulty, setDifficulty] = useState("EASY");

  const difficultyList = ["EASY", "NORMAL", "HARD"];

  const handleDifficulty = (e) => {
    const difficultyContent = e.target.textContent;
    if (difficultyContent === "EASY") {
      setDifficulty("EASY");
      setCount(EASY_COUNT);
    } else if (difficultyContent === "NORMAL") {
      setDifficulty("NORMAL");
      setCount(NORMAL_COUNT);
    } else {
      setDifficulty("HARD");
      setCount(HARD_COUNT);
    }
  };

  const [clicked, setClicked] = useState(false);

  const handleResetClick = () => {
    setScore(0);
  };

  const ResetButton = () => {
    return (
      <StyledResetButtonWrapper>
        <StyledResetButton onClick={handleResetClick}>Reset</StyledResetButton>
      </StyledResetButtonWrapper>
    );
  };

  return (
    <>
      <Normalize />
      <Header score={score} count={count} />
      {difficultyList.map((_, i) => {
        return (
          <DifficultButton
            difficulty={difficultyList[i]}
            clicked={difficulty === difficultyList[i]}
            handleDifficulty={handleDifficulty}
            key={`${i}`}
          />
        );
      })}
      <ResetButton />
    </>
  );
}

const StyledResetButton = styled.button`
  background-color: pink;
  font-weight: bold;
  font-size: 1.5rem;
  padding: 1.5rem;
  border: none;
  border-radius: 5px;
  box-shadow: rgb(229, 209, 250) 0.3rem 0.3rem 0.3rem;

  &:hover {
    background-color: white;
    color: pink;
  }
`;

const StyledResetButtonWrapper = styled.div`
  display: flex;
  position: absolute;
  top: 4rem;
  right: 1rem;
  transform: translate(-50%, -50%);
`;

export default App;
