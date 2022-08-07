import React, { useState } from "react";
import useWeatherContext from "../../context/Weather/weatherProvider";
import "./styles.css";

function WeatherTile({ weather }) {
  const URL = "http://openweathermap.org/img/w/";
  const { deleteWeather } = useWeatherContext();
  const [show, setShowTile] = useState(false);
  const place =
    weather.name == "" || weather.country == ""
      ? "Global"
      : `${weather.name}, ${weather.country}`;
  return (
    <div
      className={`weather-tile__background ${
        show
          ? "weather-tile__background--show"
          : "weather-tile__background--hide"
      }`}
    >
      <button
        className="weather-tile__delete-button"
        onClick={() => {
          deleteWeather(weather);
        }}
      />
      <div
        className="weather-tile__container"
        onClick={(e) => {
          e.preventDefault();
          e.stopPropagation();
          setShowTile((prev) => !prev);
        }}
      >
        <div className="weather-tile__mark">
          <div className="weather-tile__img-container">
            <img src={`${URL}${weather.weatherTipe[0].icon}.png`} />
          </div>
        </div>
        <div className="weather-tile__header">
          <h2>{place}</h2>
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
                .filter((e, index) => index > 0 && index < 7)
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
