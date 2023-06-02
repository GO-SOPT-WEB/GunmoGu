import { useEffect, useState } from "react";
import styled, { ThemeProvider } from "styled-components";
import Modal from "./components/Modal";
import cardImageList from "./assets/cardImageList";
import theme from "./styles/theme";
import { generateCards, shuffleCard } from "./utils/generateCardUtils";
import DifficultButtonBox from "./components/DifficultButtinWrapper";
import ResetButton from "./components/ResetButtonBox";
import Header from "./components/Header";
import CardBoard from "./components/CardBoard";

const cardData = cardImageList;

function App() {
  const EASY_COUNT = 5;
  const NORMAL_COUNT = 7;
  const HARD_COUNT = 9;
  const difficultyList = ["EASY", "NORMAL", "HARD"];

  const [score, setScore] = useState(0);
  const [count, setCount] = useState(EASY_COUNT);
  const [difficulty, setDifficulty] = useState("EASY");

  const [cardList, setCardList] = useState(
    shuffleCard(generateCards(cardData, EASY_COUNT))
  );

  const [cardFlipList, setcardFlipList] = useState(cardList.map(() => false));

  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    if (score === count) {
      toggleModal();
    }
  }, [score, count]);

  const handleDifficulty = (e) => {
    const difficultyContent = e.target.textContent;
    if (difficultyContent === "EASY") {
      setDifficulty("EASY");
      setCount(EASY_COUNT);
      setScore(0);
      const newCardList = generateCards(cardImageList, EASY_COUNT);
      setCardList(shuffleCard(newCardList));
    } else if (difficultyContent === "NORMAL") {
      setDifficulty("NORMAL");
      setCount(NORMAL_COUNT);
      setScore(0);
      const newCardList = generateCards(cardImageList, NORMAL_COUNT);
      setCardList(shuffleCard(newCardList));
    } else {
      setDifficulty("HARD");
      setCount(HARD_COUNT);
      setScore(0);
      const newCardList = generateCards(cardImageList, HARD_COUNT);
      setCardList(shuffleCard(newCardList));
    }
    setcardFlipList(cardList.map(() => false));
  };

  return (
    <StAppWrapper>
      <Header score={score} count={count} />
      <DifficultButtonBox
        difficultyList={difficultyList}
        difficulty={difficulty}
        handleDifficulty={handleDifficulty}
      />
      <CardBoard
        score={score}
        setScore={setScore}
        cardList={cardList}
        cardFlipList={cardFlipList}
        setcardFlipList={setcardFlipList}
      />
      <ResetButton
        setScore={setScore}
        setCardList={setCardList}
        setcardFlipList={setcardFlipList}
        cardList={cardList}
      />
      {isOpen && (
        <Modal>
          <StModalText>정답!</StModalText>
          <StyledModalButton onClick={toggleModal}>돌아가기</StyledModalButton>
        </Modal>
      )}
    </StAppWrapper>
  );
}

const StModalText = styled.h1`
  font-size: 3rem;
  font-weight: bold;
  text-align: center;
  margin-bottom: 2rem;
`;

const StAppWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: column;
  align-items: center;
  position: relative;
  background-color: ${({ theme }) => theme.dark.bgColor};
`;

const StyledModalButton = styled.button`
  background-color: pink;
  font-weight: bold;
  font-size: 1.5rem;
  padding: 1.5rem;
  border: none;
  border-radius: 5rem;
  box-shadow: rgb(229, 209, 250) 0.3rem 0.3rem 0.3rem;
`;

export default App;
