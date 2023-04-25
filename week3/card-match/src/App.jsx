import { useState } from "react";
import "./App.css";
import DifficultButton from "./DifficultButton";
import Header from "./Header";
import { Normalize } from "styled-normalize";

function App() {
  const EASY_COUNT = 5;
  const NORMAL_COUNT = 10;
  const HARD_COUNT = 15;

  const [score, setScore] = useState(0);
  const [count, setCount] = useState(EASY_COUNT);
  const [difficulty, setDifficulty] = useState(0);

  const difficultyList = ["EASY", "NORMAL", "HARD"];

  const handleDifficulty = (e) => {
    const difficultyContent = e.target.textContent;
    if (difficultyContent === "EASY") {
      setDifficulty(0);
      setCount(EASY_COUNT);
    } else if (difficultyContent === "NORMAL") {
      setDifficulty(1);
      setCount(NORMAL_COUNT);
    } else {
      setDifficulty(2);
      setCount(HARD_COUNT);
    }
  };

  return (
    <>
      <Normalize />
      <Header score={score} count={count} />
      {difficultyList.map((_, i) => {
        return (
          <DifficultButton
            difficulty={difficultyList[i]}
            handleDifficulty={handleDifficulty}
            key={`${i}`}
          />
        );
      })}
    </>
  );
}

export default App;
