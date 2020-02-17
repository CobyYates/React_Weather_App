import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import DataFetching from "./DataFetching";
import Typography from "@material-ui/core/Typography";

function WeatherApp() {
  return (
    <div className="app">
      <Typography>
        <h1>Weather App</h1>
      </Typography>
      <DataFetching />
    </div>
  );
}

ReactDOM.render(<WeatherApp />, document.getElementById("root"));
