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

const StyledArticle = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 15rem;
  height: 20rem;
  background-color: rgb(255, 204, 210);
  border-radius: 1rem;
`;

export default Card;
