import { useEffect, useState } from "react";
import "./App.css";
import DifficultButton from "./DifficultButton";
import Header from "./Header";
import { Normalize } from "styled-normalize";
import styled from "styled-components";
import CardBoard from "./Card";

const cardImageList = [
  {
    id: 1,
    src: "https://item.kakaocdn.net/do/907fee9278a66e8d009a194f0c5ce7d6f43ad912ad8dd55b04db6a64cddaf76d",
  },
  {
    id: 2,
    src: "https://item.kakaocdn.net/do/907fee9278a66e8d009a194f0c5ce7d6f43ad912ad8dd55b04db6a64cddaf76d",
  },
  {
    id: 3,
    src: "https://item.kakaocdn.net/do/907fee9278a66e8d009a194f0c5ce7d6f43ad912ad8dd55b04db6a64cddaf76d",
  },
  {
    id: 4,
    src: "https://item.kakaocdn.net/do/907fee9278a66e8d009a194f0c5ce7d6f43ad912ad8dd55b04db6a64cddaf76d",
  },
  {
    id: 5,
    src: "https://item.kakaocdn.net/do/907fee9278a66e8d009a194f0c5ce7d6f43ad912ad8dd55b04db6a64cddaf76d",
  },
];

const generateCards = (cardList) => {
  const cards = [];
  let id = 1;
  cardList.forEach((card) => {
    for (let i = 0; i < 2; i++) {
      cards.push({ id: id, cardId: card.id, src: card.src });
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

function App() {
  const EASY_COUNT = 5;
  const NORMAL_COUNT = 10;
  const HARD_COUNT = 15;

  const [score, setScore] = useState(0);
  const [count, setCount] = useState(EASY_COUNT);
  const [difficulty, setDifficulty] = useState("EASY");

  const difficultyList = ["EASY", "NORMAL", "HARD"];

  const [cardList, setCardList] = useState(generateCards(cardImageList));

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

  const handleResetClick = () => {
    setScore(0);
    const shuffledCardList = shuffleCard(cardList);
    setCardList(shuffledCardList);
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
      <CardBoard
        score={score}
        setScore={setScore}
        cardList={cardList}
      ></CardBoard>
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
