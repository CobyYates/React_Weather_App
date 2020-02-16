import React, { useState, useEffect } from "react";
import axios from "axios";
import "./index.css";

function DataFetching() {
  const API_key = "5e80a10989314afca9801137201102";

  const [days, setDays] = useState([]);
  const [zip, setZip] = useState(84096)
  const [zipBtnClick, setZipBtnClick] = useState(84096)
  const [data, setData] = useState({ data: null, loading: true });

  const handleClick = () => {
    setZipBtnClick(zip)
  }

  useEffect(() => {
    axios
      .get(
        `http://api.weatherapi.com/v1/forecast.json?key=${API_key}&q=${zip}&days=7`
      )
      .then(res => {
        console.log(res.data)
        setDays(res.data.forecast.forecastday)
        setData(res.data)
      })
      .catch(err => console.log(err));
  }, [zipBtnClick]);

  return (
    <div>
      <button className="tempButton">C&deg;</button>
      <button className="tempButton">F&deg;</button>
      <div className="today">
        <h3>
          {data.data ? data.data.location.name : "loading"}{" "}
          {data.data ? data.location.region : "loading"}
        </h3>
        <h3>
          Temp: {data.data ? data.current.temp_f : "loading"} f&deg;
        </h3>
        <img src="test" alt="Weather Icon" />
        <h3>{data.data ? data.current.condition.text : "loading"}</h3>
      </div>

      <input type="text" onChange={e => setZip(e.target.value)} value={zip} />
      <button type="button" onClick={handleClick}>Fetch Weather</button>
      <div className="cards">
        {days.map(day => (
          <div className="card" key={day.date}>
            <p>{day.date}</p>
            <p>{day.day.condition.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default DataFetching;
