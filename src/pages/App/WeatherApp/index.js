import React, { useEffect } from "react";
import "./styles.css";
import useWeatherContext from "../../../context/Weather/weatherProvider";
import {
  WeatherTile,
  GoogleMapBackGround,
  AutoCompleteAddress,
  NavComponent,
} from "../../../components";

function WeatherApp() {
  const { weathers, newWeather } = useWeatherContext();

  useEffect(() => {
    console.log(weathers);
  }, [weathers]);

  return (
    <div>
      <header className="weather-app-page__header">
        <h2>Weather Searcher</h2>
        <AutoCompleteAddress />
        <NavComponent
          routes={[
            { routeLink: "/", routeName: "Global", routeType: "user" },
            { routeLink: "/", routeName: "Favorites", routeType: "user" },
            { routeLink: "/", routeName: "LogOut", routeType: "user" },
          ]}
        />
      </header>
      {process.env.NODE_ENV === "development" ? (
        <>
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
        </>
      ) : (
        <>
          <GoogleMapBackGround />
        </>
      )}
    </div>
  );
}

export default WeatherApp;
