import React from "react";
import "./styles.css";
import Geocode from "react-geocode";
import AutoComplete from "react-google-autocomplete";
import { GOOGLE_MAPS_API_KEY } from "../../credentials";

function AutoCompleteAddress() {
  return (
    <AutoComplete
      apiKey={GOOGLE_MAPS_API_KEY}
      onPlaceSelected={(place) => console.log(place)}
    />
  );
}

export default AutoCompleteAddress;
