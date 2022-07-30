import React from "react";
import "./styles.css";
import { sol } from "./weathers";

function WeatherTile({ weather }) {
  const URL = "http://openweathermap.org/img/w/";
  return (
    <div className="weather-tile__background">
      <div className="weather-tile__container">
        <div className="weather-tile__header">
          <h2>{`${weather.name}, ${weather.country}`}</h2>
          <div className="weather-tile__current-weather">
            <div className="weather-tile__weather-tipe">
              <div className="weather-tile__img-container">
                <img src={`${URL}${weather.weatherTipe[0].icon}.png`} />
              </div>
              <p>{weather.weatherTipe[0].description}</p>
            </div>
            <div className="weather-tile__weather-degrees">
              {weather.temperature.toFixed(2)} ºC
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
          <div className="weather-tile__predictions">
            <ul>
              {weather.dailyWeather
                .filter((e, index) => index > 1)
                .map((dayWeather, index) => (
                  <li key={index}>
                    <span>{dayWeather.day}</span>
                    <img src={`${URL}${dayWeather.weatherTipe[0].icon}.png`} />
                  </li>
                ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WeatherTile;
