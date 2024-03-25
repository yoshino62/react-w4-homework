import React from "react";
import axios from "axios";

import "./SearchEngine.css";

export default function Weather(props) {
  function handleResponse(response) {
    // alert(`The weather in ${response.data.name} is ${response.data.main.temp}`);
  }

  let apiKey = "97c2f6a3b34509ac62090edc5d18d949";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=${apiKey}&units=metric`;

  axios.get(apiUrl).then(handleResponse);

  return (
    <div className="SearchEngine">
      <header className="Search">
        <form className="Search-form">
          <input
            type="search"
            placeholder="Search for a city"
            className="Search-form-bar"
            required
          />
          <input type="submit" value="Search" className="Search-form-button" />
        </form>
      </header>
    </div>
  );
}
