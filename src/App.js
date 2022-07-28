import "./App.css";
import { GoogleMap, withScriptjs, withGoogleMap } from "react-google-maps";
import { GoogleMapBackGround } from "./components";
import { GOOGLE_MAPS_API_KEY } from "./credentials";

const render = (status) => {
  return <h1>{status}</h1>;
};

function App() {
  return (
    <div className="App">
      <GoogleMapBackGround />
    </div>
  );
}

export default App;
