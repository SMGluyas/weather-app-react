import React, {useState} from "react";
import axios from "axios";

export default function Weather(props) {
  let [temperature, setTemperature] = useState(null);

  function showTemperature(response) {
    setTemperature(response.data.main.temp);
  }

  let url = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=275de0c841d02a257509e4dea098d5d3&units=metric`;
  axios.get(url).then(showTemperature);

  if (temperature) {
    return (
    <h1>
        The temperature in {props.city} is {Math.round(temperature)}°C
    </h1>
    );
  } else {
    return <p>Loading temperature for {props.city}...</p>;
  }
  
}