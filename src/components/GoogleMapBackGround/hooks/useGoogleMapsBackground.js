import { useEffect, useState } from "react";
import { useWeather } from "../../../hooks";

const initLocation = {
  lat: 10.48801,
  lng: -66.87919,
};

const useGoogleMpasBackground = () => {
  const [center, setCenter] = useState(initLocation);
  const [markers, setMarkers] = useState([initLocation]);
  const { getWeather, weathers, addNewWeather } = useWeather();
  const [available, setAvailable] = useState(false);

  useEffect(() => {
    if (markers[markers.length - 1]) getWeather([markers[markers.length - 1]]);
    return () => {};
  }, []);

  useEffect(() => {
    console.log(weathers);
    return () => {};
  }, [weathers]);

  const addNewMarker = async (marker) => {
    await addNewWeather(marker);
    setMarkers((prev) => [...prev, marker]);
  };

  return {
    markers,
    center,
    weathers,
    addNewMarker,
    addNewWeather,
  };
};

export default useGoogleMpasBackground;
