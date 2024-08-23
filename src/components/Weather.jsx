import React from "react";
import "./Weather.css";
import search_icon from "../assets/search.png";
import clear_icon from "../assets/clear.png";
import cloud_icon from "../assets/cloud.png";
import drizzle_icon from "../assets/drizzle.png";
import humidity_icon from "../assets/humidity.png";
import rain_icon from "../assets/rain.png";
import snow_icon from "../assets/snow.png";
import wind_icon from "../assets/wind.png";

const Weather = () => {
  return (
    <div className="weather">
      <div className="search-bar">
        <input type="text" name="search" id="search" placeholder="Search" />
        <img src={search_icon} alt="" />
      </div>
      <img className="weather-icon" src={clear_icon} alt="" />
      <p className="temperature">16°c</p>
      <p className="location">Jaffna</p>
      <div className="weather-data">
        <img src={humidity_icon} alt="" />
        <div>
          <p>Humidity</p>
          <span>80%</span>
        </div>
      </div>
    </div>
  );
};

export default Weather;
