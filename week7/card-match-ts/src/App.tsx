import { useEffect, useState } from "react";
import styled from "styled-components";
import Modal from "./components/Modal";
import DifficultButtonBox from "./components/DifficultButtinWrapper";
import ResetButton from "./components/ResetButtonBox";
import Header from "./components/Header";
import CardBoard from "./components/CardBoard";
import { useRecoilValue } from "recoil";
import { countState } from "./selectors/Count";
import { scoreState } from "./atoms/Score";

function App() {
  const count = useRecoilValue(countState);
  const score = useRecoilValue(scoreState);

  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    if (score === count) {
      toggleModal();
    }
  }, [score]);

  return (
    <StAppWrapper>
      <Header />
      <DifficultButtonBox />
      <CardBoard />
      <ResetButton />
      {isOpen && (
        <Modal>
          <StModalText>정답!</StModalText>
          <StyledModalButton onClick={toggleModal}>돌아가기</StyledModalButton>
        </Modal>
      )}
    </StAppWrapper>
  );
}

const StModalText = styled.h1`
  font-size: 3rem;
  font-weight: bold;
  text-align: center;
  margin-bottom: 2rem;
`;

const StAppWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: column;
  align-items: center;
  position: relative;
  background-color: ${({ theme }) => theme.dark.bgColor};
`;

const StyledModalButton = styled.button`
  background-color: pink;
  font-weight: bold;
  font-size: 1.5rem;
  padding: 1.5rem;
  border: none;
  border-radius: 5rem;
  box-shadow: rgb(229, 209, 250) 0.3rem 0.3rem 0.3rem;
`;

export default App;
