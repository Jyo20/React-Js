import React, { useState } from "react";
import axios from "axios";
import image from "./images/weather.png";

const WeatherApp = () => {
  let [weatherData, setWeatherData] = useState({
    name: "London",
    temp: 10,
    wind: 2,
    humidity: 90,
  });
  let [locationName, setLocationName] = useState("");
  let handleClick = (e) => {
    let api = "f940ee376359fd504c270cd3825bdfac";
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${locationName}&appid=${api}`;
    axios.get(url).then(
      (d) => {
        let { data } = d;
        console.log(data);
        let img_link = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
        let img = document.querySelector("#img");
        img.src = img_link;
        setWeatherData({
          ...weatherData,
          name: data.name,
          temp: parseInt(data.main.temp - 273),
          wind: data.wind.speed,
          humidity: data.main.humidity,
          coords: { lat: data.coord.lat, lng: data.coord.lon },
        });
      },
      (e) => console.log(e)
    );
  };
  return (
    <div className="container">
      <section>
        <h2>WEATHER REPORT</h2>
        <div>
          <aside className="top">
            <input
              type="text"
              name="location"
              id="location"
              placeholder="Enter location"
              onChange={(e) => {
                setLocationName(e.target.value);
              }}
            />
            <button type="button" onClick={handleClick}>
              Search
            </button>
          </aside>
          <aside className="middle">
            <img
              src={image}
              id="img"
              alt="logo_img"
              height={"100px"}
              width={"100px"}
            />
            <div>
              <h1> {weatherData.temp} °C</h1>
              <h3>{weatherData.name}</h3>
            </div>
          </aside>
          <aside className="bottom">
            <p>
              Humidity <br />
              {weatherData.humidity}%
            </p>

            <p>
              Wind Speed <br />
              {weatherData.wind}km/hr
            </p>
          </aside>
        </div>
        
      </section>
    </div>
  );
};

export default WeatherApp;
