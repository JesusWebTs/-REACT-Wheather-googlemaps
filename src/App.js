import React from "react";
import "./App.css";
import { GoogleMapBackGround, WeatherTile } from "./components";
import { useWeather } from "./hooks";

function App() {
  const { weathers } = useWeather();
  return (
    <div className="App">
      <GoogleMapBackGround />
      <div className="app-tiles-container">
        {weathers.map((weather) => (
          <React.Fragment>
            <WeatherTile weather={weather} />
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}

export default App;
