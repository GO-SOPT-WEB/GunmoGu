import styled from "styled-components";

const DifficultButton = ({
  difficulty,
  handleDifficulty,
  clicked,
}: {
  difficulty: string;
  handleDifficulty: () => void;
  clicked: boolean;
}) => {
  return (
    <StyledButton
      className={`${clicked ? "clicked" : ""}`}
      onClick={handleDifficulty}
    >
      {difficulty}
    </StyledButton>
  );
};

const StyledButton = styled.button`
  margin: 1rem;
  padding: 1rem;
  background-color: pink;
  border: none;
  border-radius: 0.5rem;
  font-size: 2rem;
  font-weight: bold;
  box-shadow: rgb(229, 209, 250) 0.3rem 0.3rem 0.3rem;

  &:hover {
    color: pink;
    background-color: white;
  }
  &.clicked {
    color: pink;
    background-color: white;
  }
`;

export default DifficultButton;
