import React, { useState, useEffect } from "react";
import "./styles.css";
import {
  GoogleMap,
  withScriptjs,
  withGoogleMap,
  Marker,
  OverlayView,
} from "react-google-maps";
import { GOOGLE_MAPS_API_KEY } from "../../credentials";

const initLocation = {
  lat: 12,
  lng: 12,
};

function GoogleMapBackground() {
  const [center, setCenter] = useState(initLocation);
  const [marker, setMarker] = useState(initLocation);
  return (
    <GoogleMap
      defaultCenter={center}
      defaultZoom={10}
      styles={{
        width: "100%",
        height: "100%",
      }}
      onClick={(e) => {
        setMarker({
          lat: e.latLng.lat(),
          lng: e.latLng.lng(),
        });
      }}
    >
      {/* <Marker
        position={marker}
        key={GOOGLE_MAPS_API_KEY}
        onClick={(e) => {
          console.log(e);
        }}
      >
        <div
          style={{
            backgroundColor: "black",
            width: 100,
            height: 100,
          }}
        >
          <p>Marker Personalizado</p>
        </div>
      </Marker> */}
      <OverlayView
        position={marker}
        mapPaneName={OverlayView.OVERLAY_MOUSE_TARGET}
      >
        <div>
          <h1>OverlayView</h1>
          <button onClick={onClick} type="button">
            Click me
          </button>
        </div>
      </OverlayView>
    </GoogleMap>
  );
}

const WrappedMap = withScriptjs(withGoogleMap(GoogleMapBackground));

export default () => {
  return (
    <div className="map-container map-container--fix">
      <WrappedMap
        onClick={(e) => {
          console.log("Wrapper");
          console.log(e);
        }}
        googleMapURL={`https://maps.googleapis.com/maps/api/js?key=${GOOGLE_MAPS_API_KEY}&v=3.exp&libraries=geometry,drawing,places`}
        loadingElement={<div>Loading</div>}
        containerElement={<div>Loading</div>}
        mapElement={<div>Loading</div>}
        styles={{
          width: "100%",
          height: "100%",
          GoogleMapBackground: "black",
        }}
      />
    </div>
  );
};
