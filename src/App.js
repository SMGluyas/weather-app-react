import "./App.css";
import Weather from "./Weather";
import React from "react";
import Forecast from "./Forecast";

export default function App() {
  return (
    <div className="App">
      <h1>World Weather App</h1>
      <Weather />
      <Forecast />
    </div>
  );
}
