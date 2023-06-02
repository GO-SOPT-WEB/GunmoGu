import { useState } from "react";
import Card from "./Card";
import styled from "styled-components";

const CardBoard = ({
  score,
  setScore,
  cardList,
  cardFlipList,
  setcardFlipList,
}) => {
  const [flipped, setFlipped] = useState([]);

  const matchCardClick = (cardId, id) => {
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
          undoCardFlipList();
          setFlipped([]);
        }, 1000);
        return false;
      }
    }
    return true;
  };

  const undoCardFlipList = () => {
    flipped.map((card) => {
      const newCardFlipList = [...cardFlipList];
      newCardFlipList[card.id] = false;
      setcardFlipList(newCardFlipList);
    });
  };

  const updateCardFlipList = (id) => {
    const newCardFlipList = [...cardFlipList];
    newCardFlipList[id] = true;
    setcardFlipList(newCardFlipList);
  };

  const handleCardClick = (cardId, id) => () => {
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
              clicked={cardFlipList[i]}
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
