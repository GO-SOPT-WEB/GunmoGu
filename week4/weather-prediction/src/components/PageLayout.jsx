import React from "react";
import Header from "./Header";

const PageLayout = ({ children }) => {
  return (
    <div className="page-layout">
      <Header />
      {children}
    </div>
  );
};

export default PageLayout;
