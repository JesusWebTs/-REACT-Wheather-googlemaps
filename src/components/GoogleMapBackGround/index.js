import React, { useState, useEffect, useRef } from "react";
import "./styles.css";
import {
  GoogleMap,
  withScriptjs,
  withGoogleMap,
  Marker,
  OverlayView,
} from "react-google-maps";
import { GOOGLE_MAPS_API_KEY } from "../../credentials";
import WeatherTile from "../WeaterTile";
import useGoogleMapsBackground from "./hooks/useGoogleMapsBackground";

function GoogleMapBackground() {
  const { addNewMarker, weathers, center, markers } = useGoogleMapsBackground();
  const mapRef = useRef();
  return (
    <GoogleMap
      defaultCenter={center}
      defaultZoom={10}
      styles={{
        width: "100%",
        height: "100%",
      }}
      onClick={(e) => {
        console.log(e.target);
        if (e.target === mapRef.current) return;
        addNewMarker({
          lat: e.latLng.lat(),
          lng: e.latLng.lng(),
        });
      }}
    >
      {markers.map((marker, i) => (
        <Marker
          key={i}
          position={marker}
          onClick={(e) => {
            console.log(e);
          }}
        ></Marker>
      ))}

      {weathers.map((weather) => (
        <React.Fragment key={weather.id}>
          <OverlayView
            ref={mapRef}
            position={{ lat: weather.coord.lat, lng: weather.coord.lon }}
            mapPaneName={OverlayView.OVERLAY_MOUSE_TARGET}
          >
            {<WeatherTile weather={weather} />}
          </OverlayView>
        </React.Fragment>
      ))}
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
