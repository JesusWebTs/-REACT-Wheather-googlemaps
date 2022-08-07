import { useEffect, useState } from "react";
import useWeatherContext from "../../../context/Weather/weatherProvider";

const initLocation = {
  lat: 10.48801,
  lng: -66.87919,
};

const useGoogleMpasBackground = () => {
  const [center, setCenter] = useState(initLocation);
  const [markers, setMarkers] = useState([initLocation]);
  const { weathers, newWeather, setWheaters } = useWeatherContext();

  useEffect(() => {
    if (markers[markers.length - 1]) setWheaters(markers[markers.length - 1]);
    return () => {};
  }, []);

  const addNewMarker = async (marker) => {
    newWeather(marker);
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
