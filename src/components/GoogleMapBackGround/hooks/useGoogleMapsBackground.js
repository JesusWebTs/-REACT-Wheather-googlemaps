import { useEffect } from "react";
import { useWeather } from "../../../hooks";

const initLocation = {
  lat: 12,
  lng: 12,
};

export default useGoogleMpasBackground = () => {
  const [center, setCenter] = useState(initLocation);
  const [markers, setMarkers] = useState([initLocation]);
  const [weathers, setWeathers] = useState(null);
  const { getWeather } = useWeather();

  useEffect(() => {
    getWeather(markers).then((el) => setWeathers({ ...el }));
    return () => {};
  }, [markers]);

  const addNewMarker = (marker) => {
    setMarkers((prev) => [...prev, marker]);
  };

  return {
    center,
    weathers,
    addNewMarker,
  };
};
