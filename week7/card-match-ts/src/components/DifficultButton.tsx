import styled from "styled-components";
import { useRecoilState, useSetRecoilState } from "recoil";
import { difficultyState } from "../atoms/Difficulty";
import { scoreState } from "../atoms/Score";
import { useEffect } from "react";

const DifficultButton = ({ difficultyText }: { difficultyText: string }) => {
  const [difficulty, setDifficulty] = useRecoilState(difficultyState);
  const setScore = useSetRecoilState(scoreState);

  const handleDifficulty = (e: React.MouseEvent<HTMLButtonElement>) => {
    const difficultyContent = e.currentTarget.textContent;
    switch (difficultyContent) {
      case "EASY":
        setDifficulty("EASY");
        break;
      case "NORMAL":
        setDifficulty("NORMAL");
        break;
      case "HARD":
        setDifficulty("HARD");
        break;
      default:
        break;
    }
  };

  useEffect(() => {
    setScore(0);
  }, [difficulty]);

  return (
    <StyledButton
      className={`${difficultyText == difficulty ? "clicked" : ""}`}
      onClick={handleDifficulty}
    >
      {difficultyText}
    </StyledButton>
  );
};

const StyledButton = styled.button`
  margin: 1rem;
  padding: 1rem;
  background-color: pink;
  border: none;
  border-radius: 0.5rem;
  font-size: 2rem;
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
