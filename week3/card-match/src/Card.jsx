import styled from "styled-components";

const cardImageList = [
  "https://item.kakaocdn.net/do/907fee9278a66e8d009a194f0c5ce7d6f43ad912ad8dd55b04db6a64cddaf76d",
  "https://item.kakaocdn.net/do/907fee9278a66e8d009a194f0c5ce7d6f43ad912ad8dd55b04db6a64cddaf76d",
  "https://item.kakaocdn.net/do/907fee9278a66e8d009a194f0c5ce7d6f43ad912ad8dd55b04db6a64cddaf76d",
  "https://item.kakaocdn.net/do/907fee9278a66e8d009a194f0c5ce7d6f43ad912ad8dd55b04db6a64cddaf76d",
  "https://item.kakaocdn.net/do/907fee9278a66e8d009a194f0c5ce7d6f43ad912ad8dd55b04db6a64cddaf76d",
  "https://item.kakaocdn.net/do/907fee9278a66e8d009a194f0c5ce7d6f43ad912ad8dd55b04db6a64cddaf76d",
  "https://item.kakaocdn.net/do/907fee9278a66e8d009a194f0c5ce7d6f43ad912ad8dd55b04db6a64cddaf76d",
  "https://item.kakaocdn.net/do/907fee9278a66e8d009a194f0c5ce7d6f43ad912ad8dd55b04db6a64cddaf76d",
  "https://item.kakaocdn.net/do/907fee9278a66e8d009a194f0c5ce7d6f43ad912ad8dd55b04db6a64cddaf76d",
  "https://item.kakaocdn.net/do/907fee9278a66e8d009a194f0c5ce7d6f43ad912ad8dd55b04db6a64cddaf76d",
];

const CardImage = ({ src }) => {
  console.log(src);
  return <img src={src} alt="" />;
};

const Card = ({ src }) => {
  return (
    <StyledArticle>
      <StyledCardImgWrapper>
        <StyledCardImage src={src}></StyledCardImage>
      </StyledCardImgWrapper>
    </StyledArticle>
  );
};

const CardBoard = () => {
  return (
    <StyledCardBoard>
      <StyledSection>
        {cardImageList.map((src, i) => {
          return <Card src={src} key={`${i + 1}`}></Card>;
        })}
      </StyledSection>
    </StyledCardBoard>
  );
};

const StyledCardImgWrapper = styled.div`
  display: flex;
  justify-content: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 80%;
  height: 80%;
`;

const StyledCardImage = styled.img`
  width: 100%;
  height: 100%;
`;

const StyledCardBoard = styled.div`
  width: 80%;
  height: 100%;
  margin: auto;
`;

const StyledSection = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2rem;
  padding: 3rem;
`;

const StyledArticle = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 8rem;
  height: 12rem;
  padding: 3rem;
  background-color: rgb(255, 204, 210);
  border-radius: 1rem;
`;

export default CardBoard;
