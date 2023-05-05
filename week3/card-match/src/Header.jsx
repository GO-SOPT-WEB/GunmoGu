import styled from "styled-components";
import { useEffect } from "react";

const Header = ({ score, count }) => {
  useEffect(() => {
    if (score === 0) return;
    const h3 = document.querySelector("h3");
    h3.classList.add("isAnswered");
    setTimeout(() => {
      h3.classList.remove("isAnswered");
    }, 1000);
  }, [score]);

  return (
    <StyledHeader>
      <h1>Card Match</h1>
      <h3>
        {score}/{count}
      </h3>
    </StyledHeader>
  );
};

const StyledHeader = styled.header`
  background-color: #282c34;
  min-height: 10vh;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  color: white;

  h1,
  h3 {
    margin-top: 0;
    margin-bottom: 0;
  }

  h3.isAnswered {
    color: red;
    font-size: 2rem;
  }
`;

export default Header;
