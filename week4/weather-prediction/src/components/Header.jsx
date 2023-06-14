import React from "react";
import styled from "styled-components";

const Header = () => {
  return (
    <St.HeaderWrapper>
      <h1 className="header__title">Weather Prediction</h1>
    </St.HeaderWrapper>
  );
};

export default Header;

const St = {
  HeaderWrapper: styled.header`
    background-color: red;
    padding: 1rem;
    display: flex;
    justify-content: center;
    align-items: center;

    width: 100%;
    height: 100px;

    & > h1 {
      color: white;
      font-size: 3rem;
    }
  `,
};
