import { useEffect, useState } from "react";
import { useWeather } from "../../../hooks";

const initLocation = {
  lat: 12,
  lng: 12,
};

const useGoogleMpasBackground = () => {
  const [center, setCenter] = useState(initLocation);
  const [markers, setMarkers] = useState([initLocation]);
  const { getWeather, weathers } = useWeather();

  useEffect(() => {
    console.log("markers");
    console.log(markers);
    getWeather(markers);
    return () => {};
  }, [markers]);

  useEffect(() => {
    console.log("weathers");
    console.log(weathers);
    return () => {};
  }, [weathers]);

  const addNewMarker = (marker) => {
    setMarkers((prev) => [...prev, marker]);
  };

  return {
    markers,
    center,
    weathers,
    addNewMarker,
  };
};

export default useGoogleMpasBackground;
