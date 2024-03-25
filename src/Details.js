import React from "react";

import "./Details.css";

export default function Details() {
  let weatherDetails = {
    discription: "Cloudy",
    imgUrl: "https://ssl.gstatic.com/onebox/weather/64/cloudy.png",
    humidity: "35",
    wind: "8.55",
    temperature: "8",
  };
  return (
    <div className="Weather-data">
      <div className="Weather-details">
        <p>
          <span className="Current-temperature">
            {weatherDetails.temperature}
          </span>
          <span className="Current-temperature-unit-metric">°C</span>
        </p>

        <p className="Weather-info-details">
          Humidity :
          <span className="Weather-info"> {weatherDetails.humidity}%</span>
          <br />
          Wind : <span className="Weather-info">{weatherDetails.wind}km/h</span>
        </p>
      </div>

      <div className="Current-weather">
        <div className="icon">
          <img src={weatherDetails.imgUrl} alt={weatherDetails.discription} />
        </div>

        <div className="Current-weather-condition">
          {weatherDetails.discription}
        </div>
      </div>
    </div>
  );
}
