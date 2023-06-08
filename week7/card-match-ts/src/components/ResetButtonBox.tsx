import styled from "styled-components";
import { generateCards, shuffleCard } from "../utils/generateCardUtils";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { difficultyState } from "../atoms/Difficulty";
import { scoreState } from "../atoms/Score";
import { cardListState } from "../atoms/CardList";
import cardImageList from "../assets/cardImageList";
import { countState } from "../selectors/Count";

const ResetButton = () => {
  const [difficulty, setDifficulty] = useRecoilState(difficultyState);
  const setScore = useSetRecoilState(scoreState);
  const setCardList = useSetRecoilState(cardListState);
  const count = useRecoilValue(countState);

  const handleResetClick = () => {
    const curDifficulty = difficulty;
    setDifficulty(curDifficulty);
    setScore(0);
    setCardList(shuffleCard(generateCards(cardImageList, count)));
  };

  return (
    <StyledResetButtonWrapper>
      <StyledResetButton onClick={handleResetClick}>Reset</StyledResetButton>
    </StyledResetButtonWrapper>
  );
};

const StyledResetButton = styled.button`
  background-color: pink;
  font-weight: bold;
  font-size: 1.5rem;
  padding: 1.5rem;
  border: none;
  border-radius: 0.5rem;
  box-shadow: rgb(229, 209, 250) 0.3rem 0.3rem 0.3rem;

  &:hover {
    background-color: ${({ theme }) => theme.dark.bgColor};
    color: ${({ theme }) => theme.dark.textColor};
  }
`;

const StyledResetButtonWrapper = styled.div`
  display: flex;
  position: absolute;
  top: 4rem;
  right: 1rem;
  transform: translate(-50%, -50%);
`;

export default ResetButton;
