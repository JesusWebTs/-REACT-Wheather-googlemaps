import { useState, useContext, useEffect } from "react";

import { weatherApi } from "../services/APIS";

const initLocation = {
  lat: 12,
  lng: 12,
};

const useWeather = () => {
  const [weather, setWeather] = useState({});
  const [coords, setCoords] = useState(initLocation);
  useEffect(() => {
    if (weather) getWeather();
    return () => {};
  }, []);

  useEffect(() => {
    console.log(weather);
    return () => {};
  }, [weather]);

  const getWeather = async () => {
    let weather = await weatherApi.getCurrentWeather(coords);
    setWeather(weather);
  };
  return {
    weather,
  };
};

export default useWeather;
