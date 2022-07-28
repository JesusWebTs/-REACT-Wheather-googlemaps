import React from "react";
import "./styles.css";
import { sol } from "./weathers";

function WeatherTile({ weather }) {
  return (
    <div className="weather-tile__container">
      <div className="weather-tile__header">
        <h2>Barcelona, Catalonia, Spain</h2>
        <div className="weather-tile__current-weather">
          <div className="weather-tile__weather-tipe">
            <div className="weather-tile__img-container">
              <img />
            </div>
            <p>Parltly Cloudy</p>
          </div>
          <div className="weather-tile__weather-degrees">25ºc</div>
          <div className="weather-tile__weather-information">
            <p>Wind: <span>17</span>kmph</p>
            <p>Precip: <span>0.1</span>min</p>
            <p>Presure: <span>1018</span>mb</p>
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
