import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import DataFetching from "./DataFetching";

function WeatherApp() {

  return (
      
    <div className="app">
      <h1>Weather App</h1>
     
      <DataFetching />
    </div>
  );
}

ReactDOM.render(<WeatherApp />, document.getElementById("root"));