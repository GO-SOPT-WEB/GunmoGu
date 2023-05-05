import { useEffect, useState } from "react";
import "./App.css";
import DifficultButton from "./DifficultButton";
import Header from "./Header";
import { Normalize } from "styled-normalize";
import styled, { createGlobalStyle, ThemeProvider } from "styled-components";
import CardBoard from "./Card";
import Modal from "./Modal";
import cardImageList from "./assets/cardImageList";

const cardData = cardImageList;

const generateCards = (cardList, count) => {
  const cards = [];
  let id = 1;
  const newCardList = cardList.slice(0, count);
  newCardList.forEach((card) => {
    for (let i = 0; i < 2; i++) {
      cards.push({ id: id, cardId: card.id, src: card.src, clicked: false });
      id++;
    }
  });
  return cards;
};

const shuffleCard = (cardList) => {
  const shuffledCardList = [...cardList];
  for (let i = shuffledCardList.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledCardList[i], shuffledCardList[j]] = [
      shuffledCardList[j],
      shuffledCardList[i],
    ];
  }
  return shuffledCardList;
};

const GlobalStyle = createGlobalStyle`
body {
  background-color: ${(props) => props.theme.bgColor};
  color: ${(props) => props.theme.textColor};
}
`;

const lightTheme = {
  bgColor: "rgb(255, 249, 182)",
};

function App() {
  const EASY_COUNT = 5;
  const NORMAL_COUNT = 7;
  const HARD_COUNT = 9;

  const [score, setScore] = useState(0);
  const [count, setCount] = useState(EASY_COUNT);
  const [difficulty, setDifficulty] = useState("EASY");

  const difficultyList = ["EASY", "NORMAL", "HARD"];

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

  const handleResetClick = () => {
    setScore(0);
    const shuffledCardList = shuffleCard(cardList);
    setCardList(shuffledCardList);
    setcardFlipList(cardList.map(() => false));
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
      <ThemeProvider theme={lightTheme}>
        <GlobalStyle />
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
        <CardBoard
          score={score}
          setScore={setScore}
          cardList={cardList}
          cardFlipList={cardFlipList}
          setcardFlipList={setcardFlipList}
        ></CardBoard>
        <ResetButton />
        {isOpen && (
          <Modal>
            <h1>정답!</h1>
            <StyledModalButton onClick={toggleModal}>
              돌아가기
            </StyledModalButton>
          </Modal>
        )}
      </ThemeProvider>
    </>
  );
}

const StyledModalButton = styled.button`
  background-color: pink;
  font-weight: bold;
  font-size: 1.5rem;
  padding: 1.5rem;
  border: none;
  border-radius: 5px;
  box-shadow: rgb(229, 209, 250) 0.3rem 0.3rem 0.3rem;
`;

const StyledResetButton = styled.button`
  background-color: pink;
  font-weight: bold;
  font-size: 1.5rem;
  padding: 1.5rem;
  border: none;
  border-radius: 5px;
  box-shadow: rgb(229, 209, 250) 0.3rem 0.3rem 0.3rem;

  &:hover {
    background-color: ${(props) => props.theme.bgColor};
    color: ${(props) => props.theme.textColor};
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
