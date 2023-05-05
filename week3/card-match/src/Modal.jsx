import { createPortal } from "react-dom";
import styled from "styled-components";

const ModalWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalContent = styled.div`
  background-color: #fff;
  padding: 20px;
  border-radius: 5px;
  width: 20rem;
  height: 15rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

function Modal({ children }) {
  return createPortal(
    <ModalWrapper>
      <ModalContent>{children}</ModalContent>
    </ModalWrapper>,
    document.getElementById("modal-root")
  );
}

export default Modal;
