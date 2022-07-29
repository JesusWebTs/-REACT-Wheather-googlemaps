import React from "react";
import "./styles.css";
import { sol } from "./weathers";

function WeatherTile({ weather }) {
  console.log(weather.weatherTipe[0]);
  return (
    <div className="weather-tile__container">
      <div className="weather-tile__header">
        <h2>{`${weather.name}, ${weather.country}`}</h2>
        <div className="weather-tile__current-weather">
          <div className="weather-tile__weather-tipe">
            <div className="weather-tile__img-container">
              <img />
            </div>
            <p>{weather.weatherTipe[0].description}</p>
          </div>
          <div className="weather-tile__weather-degrees">
            {weather.temperature.toFixed(2)}
          </div>
          <div className="weather-tile__weather-information">
            <p>
              Wind: <span>{weather.wind.speed}</span> kmph
            </p>
            <p>
              Humidity: <span>{weather.humidity}</span> min
            </p>
            <p>
              Pressure: <span>{weather.pressure}</span> mb
            </p>
          </div>
        </div>
      </div>
      <div className="weather-tile__body">
        <div className="weather-tile__predictions"></div>
      </div>
    </div>
  );
}

export default WeatherTile;
