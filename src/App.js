import React from "react";
import "./App.css";
import { GoogleMapBackGround, WeatherTile } from "./components";
import { useWeather } from "./hooks";

function App() {
  const { weathers } = useWeather();
  return (
    <div className="App">
      <GoogleMapBackGround />
    </div>
  );
}

export default App;
