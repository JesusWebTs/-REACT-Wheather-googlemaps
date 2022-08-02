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

  const getWeather = async (coors) => {
    let weather = await weatherApi.getMultipleFullWeatherPrediction(coors);
    setWeathers((prev) => [...prev, weather]);
  };
  return {
    weathers,
    getWeather,
  };
};

export default useWeather;
