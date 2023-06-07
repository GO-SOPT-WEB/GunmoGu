import styled from "styled-components";
import { useEffect, useRef } from "react";

const Header = ({ score, count }: { score: number; count: number }) => {
  const scoreTitle = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    if (score === 0) return;
    const h3 = scoreTitle.current;
    if (!h3) return;
    h3.classList.add("isAnswered");
    setTimeout(() => {
      h3.classList.remove("isAnswered");
    }, 1000);
  }, [score]);

  return (
    <StyledHeader>
      <StTile>Card Match</StTile>
      <StScoreTitle ref={scoreTitle}>
        {score}/{count}
      </StScoreTitle>
    </StyledHeader>
  );
};

const StScoreTitle = styled.h3`
  margin-top: 0;
  margin-bottom: 0;
  font-size: 2rem;
  font-weight: bold;
  color: white;

  &.isAnswered {
    color: red;
    font-size: 2rem;
  }
`;

const StTile = styled.h1`
  margin-top: 0;
  margin-bottom: 0;
  font-size: 3rem;
  font-weight: bold;
  color: white;
`;

const StyledHeader = styled.header`
  background-color: #282c34;
  height: 20rem;
  width: 100%;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  color: white;
`;

export default Header;
