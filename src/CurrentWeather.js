import React from "react";

import "./CurrentWeather.css";

export default function CurrentWeather() {
  let weatherDate = {
    city: "Tokyo",
    date: "19:30 | Friday",
  };

  return (
    <h1 className="Current-location-time">
      <span className="Currrent-city">{weatherDate.city}</span>
      <span className="Current-time">{weatherDate.date}</span>
    </h1>
  );
}
