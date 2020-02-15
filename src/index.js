import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import "./index.css";

// function Card(data) {
//   return (
//     <div className="card">
//       <h2>date</h2>
//       <img
//         src="https://icons-for-free.com/iconfiles/png/512/forecast+partly+cloudy+weather+icon-1320196484400215944.png"
//         alt="Weather Icon" />
//     </div>
//   );
// }

// function Inputs() {
//   return (
//     <center>
//       <form>
//         <input className="input" placeholder="city"></input>
//         <input className="input" placeholder="country"></input>
//         <button className="button">Get Weather</button>
//       </form>
//     </center>
//   );
// }

// function Today({data, name}) {
//   return (
//     <div className="container">
//         {/* {data.data ? data.data.location.name : 'lo'} */}
//         <div>My name is : {name} </div>
//       <div className="cards">
//         <Card value="0" />
//         <Card value="1" />
//         <Card value="2" />
//         <Card value="3" />
//         <Card value="4" />
//         <Card value="5" />
//         <Card value="6" />
//       </div>
//     </div>
//   );
// }

function useFetch(url) {
  const [data, setData] = useState({ data: null, loading: true });

  useEffect(() => {
    fetch(url)
      .then(x => x.json())
      .then(y => {
        console.log(y);
        setData({ data: y, loading: false });
      });
  }, [url]);

  return data;
}

// const API_key = "5e80a10989314afca9801137201102";

// function WeatherApp() {

//   const data = useFetch(
//     `http://api.weatherapi.com/v1/forecast.json?key=${API_key}&q=lehi, ut&days=1`
//   );

//   return (
//     <div className="app">
//       <h1>Weather App</h1>
//       <Inputs data={data}/>
//         <div className="">
//             <h3>{data.data ? data.data.location.name : 'loading'} {data.data ? data.data.location.region : 'loading'}</h3>
//             <h3>Temp: {data.data ? data.data.current.temp_f : 'loading'} F&deg;</h3>
//             <img src="test" alt="Weather Icon"/>
//             <h3>{data.data ? data.data.current.condition.text : 'loading'}</h3>
//         </div>
//       <Today />
//     </div>
//   );
// }

// ReactDOM.render(<WeatherApp />, document.getElementById("root"));

function tempChange(t) {
  if (t === "c") {
    return "temp_c";
  } else return "temp_f";
}

let temp = "";
const API_key = "5e80a10989314afca9801137201102";
let zip = "84096";

function WeatherApp() {
  const data = useFetch(
    `http://api.weatherapi.com/v1/forecast.json?key=${API_key}&q=${zip}&days=7`
  );

  return (
    <div className="app">
      <h1>Weather App</h1>
      <center>
        <form>
          <input className="input" placeholder="city"></input>
          <input className="input" placeholder="country"></input>
          <button className="button">Get Weather</button>
        </form>
      </center>
      <button className="tempButton">C&deg;</button>
      <button className="tempButton">F&deg;</button>
      <div className="">
        <h3>
          {data.data ? data.data.location.name : "loading"}{" "}
          {data.data ? data.data.location.region : "loading"}
        </h3>
        <h3>
          Temp: {data.data ? data.data.current.temp_f : "loading"} {temp}&deg;
        </h3>
        <img src="test" alt="Weather Icon" />
        <h3>{data.data ? data.data.current.condition.text : "loading"}</h3>
      </div>
      <div className="container">
        <div className="cards">
          <div className="card">
            <h2>
              {data.data ? data.data.forecast.forecastday[1].date : "loading"}
            </h2>
            <img
              src="https://icons-for-free.com/iconfiles/png/512/forecast+partly+cloudy+weather+icon-1320196484400215944.png"
              alt="Weather Icon"
            />
            <p>
              {data.data
                ? data.data.forecast.forecastday[1].day.condition.text
                : "loading"}
            </p>
          </div>
          <div className="card">
            <h2>
              {data.data ? data.data.forecast.forecastday[2].date : "loading"}
            </h2>
            <img
              src="https://icons-for-free.com/iconfiles/png/512/forecast+partly+cloudy+weather+icon-1320196484400215944.png"
              alt="Weather Icon"
            />
            <p>
              {data.data
                ? data.data.forecast.forecastday[2].day.condition.text
                : "loading"}
            </p>
          </div>
          <div className="card">
            <h2>
              {data.data ? data.data.forecast.forecastday[3].date : "loading"}
            </h2>
            <img
              src="https://icons-for-free.com/iconfiles/png/512/forecast+partly+cloudy+weather+icon-1320196484400215944.png"
              alt="Weather Icon"
            />
            <p>
              {data.data
                ? data.data.forecast.forecastday[3].day.condition.text
                : "loading"}
            </p>
          </div>
          <div className="card">
            <h2>
              {data.data ? data.data.forecast.forecastday[4].date : "loading"}
            </h2>
            <img
              src="https://icons-for-free.com/iconfiles/png/512/forecast+partly+cloudy+weather+icon-1320196484400215944.png"
              alt="Weather Icon"
            />
            <p>
              {data.data
                ? data.data.forecast.forecastday[4].day.condition.text
                : "loading"}
            </p>
          </div>
          <div className="card">
            <h2>
              {data.data ? data.data.forecast.forecastday[5].date : "loading"}
            </h2>
            <img
              src="https://icons-for-free.com/iconfiles/png/512/forecast+partly+cloudy+weather+icon-1320196484400215944.png"
              alt="Weather Icon"
            />
            <p>
              {data.data
                ? data.data.forecast.forecastday[5].day.condition.text
                : "loading"}
            </p>
          </div>
          <div className="card">
            <h2>
              {data.data ? data.data.forecast.forecastday[6].date : "loading"}
            </h2>
            <img
              src="https://icons-for-free.com/iconfiles/png/512/forecast+partly+cloudy+weather+icon-1320196484400215944.png"
              alt="Weather Icon"
            />
            <p>
              {data.data
                ? data.data.forecast.forecastday[6].day.condition.text
                : "loading"}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

ReactDOM.render(<WeatherApp />, document.getElementById("root"));
