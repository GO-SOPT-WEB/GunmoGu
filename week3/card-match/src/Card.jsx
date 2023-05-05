import styled from "styled-components";
import { useEffect, useState } from "react";

const Card = ({ handleCardClick, id, src, cardId, clicked }) => {
  return (
    <StyledArticle>
      <StyledCardImgWrapper
        className={`${clicked ? "clicked" : ""}`}
        onClick={handleCardClick(cardId, id)}
      >
        <StyledCardBack></StyledCardBack>
        <StyledCardImage src={src}></StyledCardImage>
      </StyledCardImgWrapper>
    </StyledArticle>
  );
};

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

const StyledCardImgWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 100%;
  height: 100%;
  transition: transform 0.6s;
  transform-style: preserve-3d;
  &.clicked {
    transform: rotateY(180deg);
  }
`;

const StyledCardImage = styled.img`
  width: 80%;
  height: 80%;
  backface-visibility: hidden;
  z-index: 2;
  transform: rotateY(180deg);
`;

const StyledCardBack = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: rgb(224, 14, 213);
  border-radius: 1rem;
  backface-visibility: hidden;
  box-shadow: rgb(255, 204, 210) 0.1rem 0.1rem 0.1rem;
`;

const StyledCardBoard = styled.div`
  width: 80%;
  height: 100%;
  margin: 10px auto;
`;

const StyledSection = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2rem;
`;

const StyledArticle = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 15rem;
  height: 18rem;
  background-color: rgb(255, 204, 210);
  border-radius: 1rem;
`;

export default CardBoard;
