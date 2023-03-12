import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "./HomePage";
import AboutPage from "./AboutPage";
import Navigation from "./Navigation";
import TestingPage from "./TestingPage";

function Pages() {
  return (
    <div>
      <Navigation />
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route exact path="/about" element={<AboutPage />} />
        <Route exact path="/test" element={<TestingPage />} />
      </Routes>
    </div>
  );
}
export default Pages;
