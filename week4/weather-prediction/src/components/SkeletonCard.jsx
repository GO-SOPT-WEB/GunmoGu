import { styled } from "styled-components";

const SkeletonCard = () => {
  return <St.SkeletonCard />;
};

export default SkeletonCard;

const St = {
  SkeletonCard: styled.section`
    @keyframes pulse {
      0% {
        background-color: #94a3b8;
      }

      50% {
        background-color: #cbd5e1;
      }

      100% {
        background-color: #94a3b8;
      }
    }

    &::before {
      content: "";
      position: absolute;
      top: 18rem;
      left: 0;
      width: 100%;
      height: 40%;
      animation: pulse 1s infinite ease-in-out;
    }
  `,
};
