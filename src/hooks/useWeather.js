import { useState, useContext, useEffect } from "react";
import WeatherInfoModel from "../Models/WheatherInfoModel";

import { weatherApi } from "../services/APIS";

const initLocation = {
  lat: 12,
  lng: 12,
};

const useWeather = () => {
  const [weathers, setWeathers] = useState([]);
  const [coords, setCoords] = useState(initLocation);

  const addNewWeather = async (coors) => {
    console.log(coors);
    let weather = await weatherApi.getMultipleFullWeatherPrediction(coors);
    setWeathers((prev) => [...prev, ...weather]);
  };
  const getWeather = async (coors) => {
    let weather = await weatherApi.getMultipleFullWeatherPrediction(coors);
    setWeathers(weather);
  };

  return {
    weathers,
    getWeather,
    addNewWeather,
  };
};

export default useWeather;
