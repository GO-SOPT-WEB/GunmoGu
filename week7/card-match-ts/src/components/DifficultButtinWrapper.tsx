import styled from "styled-components";
import DifficultButton from "./DifficultButton";

const DifficultButtonBox = ({
  difficultyList,
  difficulty,
  handleDifficulty,
}: {
  difficultyList: string[];
  difficulty: string;
  handleDifficulty: () => void;
}) => {
  return (
    <StDifficultyButtonWrapper>
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
    </StDifficultyButtonWrapper>
  );
};

const StDifficultyButtonWrapper = styled.div`
  margin-top: 2rem;
`;

export default DifficultButtonBox;
