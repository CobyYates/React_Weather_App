import React, { useState, useEffect } from "react";
import axios from "axios";
import "./index.css";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Card from "@material-ui/core/Card";
import CardContent from '@material-ui/core/CardContent';
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";

function DataFetching() {
  const API_key = "5e80a10989314afca9801137201102";
  const [days, setDays] = useState([]);
  const [zip, setZip] = useState(84058);
  const [zipBtnClick, setZipBtnClick] = useState(84096);
  const [location, setData] = useState("");
  const [tempC, setTempC] = useState("");
  const [tempF, setTempF] = useState("");
  const [condition, setCondition] = useState("");
  const [icon, setIcon] = useState("");
  const [degree, setDegree] = useState(true);

  const handleClick = () => {
    setZipBtnClick(zip);
  };

  useEffect(() => {
    axios
      .get(
        `https://api.weatherapi.com/v1/forecast.json?key=${API_key}&q=${zip}&days=7`
      )
      .then(res => {
        setDays(res.data.forecast.forecastday);
        setData(res.data.location.name + ", " + res.data.location.region);
        setTempC(res.data.current.temp_c);
        setTempF(res.data.current.temp_f);
        setCondition(res.data.current.condition.text);
        setIcon(res.data.current.condition.icon);
        console.log(res.data);
      })
      .catch(err => console.log(err));
  }, [zipBtnClick]);

  return (
    <div>
      <div className="search">
        <Button
          style={{ marginRight: 24 }}
          color="secondary"
          variant="contained"
          onClick={() => setDegree(false)}
        >
          C&deg;
        </Button>
        <Button
          color="primary"
          variant="contained"
          onClick={() => setDegree(true)}
        >
          F&deg;
        </Button>
        <div className="today">
          <Typography>
            <h2>{location}</h2>
            <h3>Temp: {degree ? tempF + " f" : tempC + " c"} &deg;</h3>
            <img src={icon} alt="Weather Icon" />
            <h3>{condition}</h3>
          </Typography>
        </div>

        <TextField
          style={{ marginRight: 24 }}
          color="primary"
          id="standard-basic"
          label="zipcode"
          type="text"
          onChange={e => setZip(e.target.value)}
          value={zip}
        />
        <Button
          color="primary"
          variant="contained"
          type="button"
          onClick={handleClick}
        >
          Fetch Weather
        </Button>
      </div>

      <div className="grid">
        <Grid container spacing={10} style={{ padding: 24 }}>
          {days.map(day => (
            <Grid item xs={12} sm={4} lg={3} xl={3}>
              <Card key={day.date}>
                <CardContent>
                  <Typography variant="h3">
                    <p>{day.date}</p>
                    <img src={day.day.condition.icon} alt="icon" />
                    <p>{day.day.condition.text}</p>
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </div>
    </div>
  );
}

export default DataFetching;
