import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Weather from "./pages/Weather";
import ErrorPage from "./pages/ErrorPage";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/day" element={<Home />}>
          <Route path=":city" element={<Weather />} />
        </Route>
        <Route path="/week" element={<Home />}>
          <Route path=":city" element={<Weather />} />
        </Route>
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
