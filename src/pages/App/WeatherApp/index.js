import React, { useEffect } from "react";
import useWeatherContext from "../../../context/Weather/weatherProvider";
import { WeatherTile } from "../../../components";

function WeatherApp() {
  const { weathers, newWeather } = useWeatherContext();

  useEffect(() => {
    console.log(weathers);
  }, [weathers]);

  return (
    <div>
      <button
        onClick={() => {
          newWeather({ lat: -54, lng: 5 });
        }}
      >
        New Weather
      </button>
      {weathers.map((weather) => (
        <WeatherTile weather={weather} />
      ))}
    </div>
  );
}

export default WeatherApp;
