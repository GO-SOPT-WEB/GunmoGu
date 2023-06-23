import { useState, useEffect } from "react";
import Card from "./Card";
import styled from "styled-components";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { generateCards, shuffleCard } from "../utils/generateCardUtils";
import cardImageList from "../assets/cardImageList";
import { countState } from "../selectors/Count";
import { scoreState } from "../atoms/Score";
import { cardListState } from "../atoms/CardList";

const CardBoard = () => {
  const [flipped, setFlipped] = useState<
    {
      cardId: number;
      id: number;
    }[]
  >([]);

  const score = useRecoilValue(scoreState);
  const setScore = useSetRecoilState(scoreState);
  const count = useRecoilValue(countState);

  const [cardList, setCardList] = useRecoilState(cardListState);
  useEffect(() => {
    setCardList(shuffleCard(generateCards(cardImageList, count)));
  }, [count]);

  const matchCardClick = (cardId: number, id: number) => {
    const newFlipped = [
      ...flipped,
      {
        cardId,
        id,
      },
    ];
    setFlipped(newFlipped);

    if (newFlipped.length === 2) {
      if (newFlipped[0].cardId === newFlipped[1].cardId) {
        setScore(score + 1);
        setFlipped([]);
      } else {
        setTimeout(() => {
          undoCardFlipList(newFlipped);
          setFlipped([]);
        }, 1000);
        return false;
      }
    }
    return true;
  };

  const undoCardFlipList = (
    flipped: {
      cardId: number;
      id: number;
    }[]
  ) => {
    const newCardList = JSON.parse(JSON.stringify(cardList));
    flipped.map((card) => {
      newCardList[card.id].flipped = false;
    });
    setCardList(newCardList);
  };

  const updateCardFlipList = (id: number) => {
    const newCardList = JSON.parse(JSON.stringify(cardList));
    newCardList[id].flipped = true;
    setCardList(newCardList);
  };

  const handleCardClick = (cardId: number, id: number) => () => {
    if (flipped.length === 2) {
      return;
    }
    if (flipped.map((card) => card.id).includes(id)) {
      return;
    }
    updateCardFlipList(id);
    if (matchCardClick(cardId, id) === false) {
      setTimeout(() => {
        setFlipped([]);
      }, 1000);
    }
  };

  return (
    <StyledCardBoard>
      <StyledSection>
        {cardList.map((card, i) => {
          return (
            <Card
              handleCardClick={handleCardClick}
              cardId={card.cardId}
              src={card.src}
              clicked={card.flipped}
              id={i}
              key={`${i + 1}`}
            ></Card>
          );
        })}
      </StyledSection>
    </StyledCardBoard>
  );
};

const StyledCardBoard = styled.div`
  width: 80%;
  height: 100%;
  margin: 5rem auto;
`;

const StyledSection = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2rem;
`;

export default CardBoard;
