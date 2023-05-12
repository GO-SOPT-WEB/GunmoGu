import { styled } from "styled-components";
import PageLayout from "../components/PageLayout";

const ErrorPage = () => {
  return (
    <PageLayout>
      <St.ErrorContentWrapper>
        <span>404</span>
        <span>페이지를 찾을 수 없습니다.</span>
      </St.ErrorContentWrapper>
    </PageLayout>
  );
};

export default ErrorPage;

const St = {
  ErrorContentWrapper: styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 1rem;
    width: 100%;
    height: 80vh;

    & > span {
      font-size: 3rem;
      margin-bottom: 1rem;
    }
  `,
};
