import React, { useState, useEffect } from "react";
import "./styles.css";
import GoogleMaps from "simple-react-google-maps";
import { GOOGLE_MAPS_API_KEY } from "../../credentials";

function GoogleMapBackground() {
  const [center, setCenter] = useState({ lat: 12, lng: 12 });
  const [marker, setMarker] = useState({ lat: 12, lng: 12 });
  return (
    <div className="map-container">
      <GoogleMaps
        style={{
          width: "100%",
          height: "100%",
        }}
        center={center}
        zoom={10}
        apiKey={GOOGLE_MAPS_API_KEY}
        
      ></GoogleMaps>
    </div>
  );
}

export default GoogleMapBackground;
