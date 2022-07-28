import "./App.css";
import { GoogleMapBackGround, WeatherTile } from "./components";
import { useWeather } from "./hooks";

function App() {
  const { weather } = useWeather();
  return (
    <div className="App">
      {/* <GoogleMapBackGround /> */}
      <WeatherTile weather={weather} />
    </div>
  );
}

export default App;
