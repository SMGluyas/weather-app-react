import React, {useState} from "react";
import axios from "axios";
import Loader from 'react-loader-spinner';
import "./Weather.css"

export default function Weather() {
  let [city, setCity] = useState(null);
  let [temperature, setTemperature] = useState(null);
  let [description, setDescription] = useState(" ");
  let [humidity, setHumidity] = useState(" ");
  let [wind, setWind] = useState(" ");
  let [icon, setIcon] = useState(" ");

  function handleSubmit(event) {
    event.preventDefault();
    if (city.length > 0) {
      let apiKey = "275de0c841d02a257509e4dea098d5d3";
      let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
      axios.get(url).then(showTemperature);
    }
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

  function showTemperature(response) {
    let temperature = response.data.main.temp;
    let description = response.data.weather[0].description;
    let humidity = response.data.main.humidity;
    let wind = response.data.wind.speed;
    let icon = response.data.weather[0].icon;

    return (
      setTemperature(`${Math.round(temperature)}`),
      setDescription(`${description}`),
      setHumidity(`${Math.round(humidity)}`),
      setWind(`${wind}`),
      setIcon(`http://openweathermap.org/img/wn/${icon}@2x.png`)
    );
  }
  if (temperature) {
    return (
      <div>
        <form onSubmit={handleSubmit}>
          <input type="search" className="searchInput" onChange={updateCity} />
          <button type="submit" className="btn btn-primary">Search</button>
          <button type="submit"
            className="btn btn-success"
            id="find-location-button"
          >
            <i className="fas fa-map-marker-alt"></i></button>
        </form>
        <div className="currentWeatherGrid">
          <div className="row">
            <div className="col-4-icon">
              <h2 className="cityName">{city}</h2>
              <div className="weatherIcon">
                <img src={icon} alt="" className="currentIcon" />
              </div>
            </div>
            <div className="col-4-currentTemp">
              <div className="currentTempFig">{temperature}</div>
              <ul className="mainTempUnit">
                <li className="celsiusUnit">°C </li>|
                <li className="clickable" id="farenheight-unit">
                  °F
                </li>
              </ul>
            </div>
            <div className="col-4-humWind">
              <div className="description">{description}</div>
              <div className="humidity">Humidity: {humidity}%</div>
              <div className="wind">Wind speed: {wind}km/hr</div>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div>
        <form onSubmit={handleSubmit}>
          <input type="search" className="searchInput" autofocus="on" onChange={updateCity} />
          <button type="submit" className="btn btn-primary">Search</button>
          <button type="submit"
            className="btn btn-success"
            id="find-location-button"
          >
            <i className="fas fa-map-marker-alt"></i></button>
        </form>
        <div className="currentWeatherGrid">
          <div className="row">
            <div className="col-4-icon">
              <h2 className="cityName">Auckland</h2>
              <div className="weatherIcon">
                <img src="http://openweathermap.org/img/wn/10d@2x.png" alt="" className="currentIcon" />
              </div>
            </div>
            <div className="col-4-currentTemp">
              <div className="currentTempFig">18</div>
              <ul className="mainTempUnit">
                <li className="celsiusUnit">°C </li>|
                <li className="clickable" id="farenheight-unit">
                  °F
                </li>
              </ul>
            </div>
            <div className="col-4-humWind">
              <div className="description">Partly cloudy</div>
              <div className="humidity">Humidity: 70%</div>
              <div className="wind">Wind speed: 15km/hr</div>
            </div>
          </div>
        </div>
        <p><Loader
          type="Puff"
          color="orange"
          height={100}
          width={100}
          timeout={2000} //3 secs

        /></p>
      </div>
    )
  }
  
}