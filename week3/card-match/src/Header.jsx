import styled from "styled-components";

const Header = ({ score, count }) => {
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
`;

export default Header;
