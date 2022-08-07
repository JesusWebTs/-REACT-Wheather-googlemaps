import React from "react";
import "./styles.css"

function Loader({ isLoading }) {
  return isLoading ? <div className="loader-container" /> : <></>;
}

export default Loader;
