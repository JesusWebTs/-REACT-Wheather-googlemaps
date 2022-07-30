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
  useEffect(() => {
    if (weathers) getWeather();
    return () => {};
  }, []);

  useEffect(() => {
    /* console.log(weathers); */
    return () => {};
  }, [weathers]);

  const getWeather = async () => {
    let weather = await weatherApi.getMultipleFullWeatherPrediction([
      coords,
      { lat: 10, lng: -10 },
      { lat: 6.42375, lng: -66.58973 },
    ]);
    setWeathers(weather);
  };
  return {
    weathers,
  };
};

export default useWeather;
