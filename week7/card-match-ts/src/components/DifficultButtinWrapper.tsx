import styled from "styled-components";
import DifficultButton from "./DifficultButton";

const DifficultButtonBox = () => {
  const difficultyList = ["EASY", "NORMAL", "HARD"];

  return (
    <StDifficultyButtonWrapper>
      {difficultyList.map((_, i) => {
        return (
          <DifficultButton difficultyText={difficultyList[i]} key={`${i}`} />
        );
      })}
    </StDifficultyButtonWrapper>
  );
};

const StDifficultyButtonWrapper = styled.div`
  margin-top: 2rem;
`;

export default DifficultButtonBox;
