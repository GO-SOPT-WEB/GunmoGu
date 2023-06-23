import styled from "styled-components";
import { shuffleCard } from "../utils/generateCardUtils";

const ResetButton = ({ setScore, setCardList, setcardFlipList, cardList }) => {
  const handleResetClick = () => {
    setScore(0);
    const shuffledCardList = shuffleCard(cardList);
    setcardFlipList(cardList.map(() => false));
    setCardList(shuffledCardList);
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
