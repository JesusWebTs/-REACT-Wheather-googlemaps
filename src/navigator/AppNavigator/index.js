import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { WeatherApp } from "../../pages/App";

function AppNavigator() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<WeatherApp />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppNavigator;
