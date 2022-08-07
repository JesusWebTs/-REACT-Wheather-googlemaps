import React from "react";
import "./App.css";
import { WeatherProvider } from "./context/Weather/weatherProvider";
import AppNavigator from "./navigator/AppNavigator";

function App() {
  return (
    <div className="App">
      <WeatherProvider>
        <AppNavigator />
      </WeatherProvider>
    </div>
  );
}

export default App;
