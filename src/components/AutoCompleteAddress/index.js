import React, { useRef } from "react";
import "./styles.css";
/* import Geocode from "react-geocode"; */
import AutoComplete from "react-google-places-autocomplete";
import { GOOGLE_MAPS_API_KEY } from "../../credentials";

function AutoCompleteAddress() {
  const inputRef = useRef();

  return (
    <AutoComplete
      apiKey={GOOGLE_MAPS_API_KEY}
      onPlaceSelected={(place) => console.log(place)}
      debounce={(e) => {
        console.log(e);
      }}
      autocompletionRequest={(e) => {
        console.log(e);
      }}
    />
  );
}

export default AutoCompleteAddress;
