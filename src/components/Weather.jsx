import React from "react";
import "./Weather.css";
const Weather = () => {
  return (
    <div>
      <h1 className="weather">
        <div className="search-bar">
          <input type="text" name="search" id="search" placeholder="Search" />
        </div>
      </h1>
    </div>
  );
};

export default Weather;
