import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "./HomePage";
import AboutPage from "./AboutPage";
import Navigation from "./Navigation";

function Pages() {
  return (
    <div>
      <Navigation />
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route exact path="/about" element={<AboutPage />} />
      </Routes>
    </div>
  );
}
export default Pages;
