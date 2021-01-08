import React from "react";

import "./Forecast.css";

export default function Forecast() {
  let forecastData = {
    time: "15.00",
    imgIcon : "http://openweathermap.org/img/wn/10d@2x.png",
    maxTemp : 15,
    minTemp : 8,
  } 

  return (
    <div className="weatherForecast">
      <div className="row">
        <div className="col-2">
          <div className="forecastTime">{forecastData.time}</div>
          <div className="forecastIcon">
            <img src={forecastData.imgIcon} alt="" className="forecastImage" />
          </div>
          <div className="forecastMax">
            {forecastData.maxTemp}
            <span className="unit">°C</span>
          </div>
          <div className="forecastMin">
            {forecastData.minTemp}
            <span className="unit">°C</span>
          </div>
        </div>
        <div className="col-2">
          <div className="forecastTime">{forecastData.time}</div>
          <div className="forecastIcon">
            <img src={forecastData.imgIcon} alt="" className="forecastImage" />
          </div>
          <div className="forecastMax">
            {forecastData.maxTemp}
            <span className="unit">°C</span>
          </div>
          <div className="forecastMin">
            {forecastData.minTemp}
            <span className="unit">°C</span>
          </div>
        </div>
        <div className="col-2">
          <div className="forecastTime">{forecastData.time}</div>
          <div className="forecastIcon">
            <img src={forecastData.imgIcon} alt="" className="forecastImage" />
          </div>
          <div className="forecastMax">
            {forecastData.maxTemp}
            <span className="unit">°C</span>
          </div>
          <div className="forecastMin">
            {forecastData.minTemp}
            <span className="unit">°C</span>
          </div>
        </div>
        <div className="col-2">
          <div className="forecastTime">{forecastData.time}</div>
          <div className="forecastIcon">
            <img src={forecastData.imgIcon} alt="" className="forecastImage" />
          </div>
          <div className="forecastMax">
            {forecastData.maxTemp}
            <span className="unit">°C</span>
          </div>
          <div className="forecastMin">
            {forecastData.minTemp}
            <span className="unit">°C</span>
          </div>
        </div>
        <div className="col-2">
          <div className="forecastTime">{forecastData.time}</div>
          <div className="forecastIcon">
            <img src={forecastData.imgIcon} alt="" className="forecastImage" />
          </div>
          <div className="forecastMax">
            {forecastData.maxTemp}
            <span className="unit">°C</span>
          </div>
          <div className="forecastMin">
            {forecastData.minTemp}
            <span className="unit">°C</span>
          </div>
        </div>
        <div className="col-2">
          <div className="forecastTime">{forecastData.time}</div>
          <div className="forecastIcon">
            <img src={forecastData.imgIcon} alt="" className="forecastImage" />
          </div>
          <div className="forecastMax">
            {forecastData.maxTemp}
            <span className="unit">°C</span>
          </div>
          <div className="forecastMin">
            {forecastData.minTemp}
            <span className="unit">°C</span>
          </div>
        </div>
      </div>
    </div>
  );
}