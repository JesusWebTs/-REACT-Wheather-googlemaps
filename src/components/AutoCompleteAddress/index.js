import React, { useState, useEffect } from "react";
import "./styles.css";
import { Loader } from "../";
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng,
} from "react-places-autocomplete";
import useWeatherContext from "../../context/Weather/weatherProvider";

const LocationSearchInput = ({ setCoors = () => {} }) => {
  const [address, setAddress] = useState();
  const { newWeather, setCurrentCoors } = useWeatherContext();

  useEffect(() => {
    /* console.log(address); */
    return () => {};
  }, [address]);

  const handleChange = (address) => {
    setAddress(address);
  };

  const handleSelect = (address) => {
    geocodeByAddress(address)
      .then((results) => getLatLng(results[0]))
      .then((latLng) => {
        setAddress("");
        setCurrentCoors(latLng);
        newWeather(latLng);
        setCoors(latLng);
      })
      .catch((error) => console.error("Error", error));
  };

  return (
    <PlacesAutocomplete
      value={address}
      onChange={handleChange}
      onSelect={handleSelect}
    >
      {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
        <div>
          <input
            {...getInputProps({
              placeholder: "Search Places ...",
              className: "location-search-input",
            })}
          />
          <div className="autocomplete-dropdown-container">
            {loading && (
              <div className="autocomplete-dropdown__loader-container">
                <Loader isLoading={loading} />
              </div>
            )}
            {suggestions.map((suggestion) => {
              const className = suggestion.active
                ? "suggestion-item--active"
                : "suggestion-item";
              // inline style for demonstration purpose
              const style = suggestion.active
                ? { backgroundColor: "#fafafa", cursor: "pointer" }
                : { backgroundColor: "#ffffff", cursor: "pointer" };
              return (
                <div
                  {...getSuggestionItemProps(suggestion, {
                    className,
                    style,
                  })}
                >
                  <span>{suggestion.description}</span>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </PlacesAutocomplete>
  );
};

export default LocationSearchInput;
