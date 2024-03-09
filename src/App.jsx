import React, { useState } from "react";
import Info_Temp from "./Info_Temp";
import axios from "axios";
import "./App.css";

function App() {
  const [city, setCity] = useState("");
  const [data, setData] = useState({
    description: "",
    temperature: "",
    humidity: "",
    country: "",
  });
  const [error, setError] = useState("");

  const handleClick = () => {
    axios
      .get(
        `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=d9e697c23730153fd9a25bd30861d417`
      )
      .then((response) => {
        const temperatureCelsius = response.data.main.temp - 273.15;
        setData({
          description: response.data.weather[0].description,
          temperature: temperatureCelsius.toFixed(2),
          humidity: response.data.main.humidity,
          country: response.data.sys.country,
        });
        const display_data = document.querySelector(".display_data");
        display_data.style.display = "block";

        setError("");
      })
      .catch((error) => {
        const display_data = document.querySelector(".display_data");
        display_data.style.display = "none";
        console.error("Error fetching weather data:", error);
        setError("Oops!! City not found.");
      });
  };

  return (
    <>
      <div className="cont">
        <div className="container text-center my-2">
          <h1 className="heading">Weather App</h1>
          <div className="input_field">
            <input
              type="text"
              value={city}
              onChange={(e) => {
                setCity(e.target.value);
                console.log(e.target.value);
              }}
            />
            <button
              className="btn btn-primary mx-2"
              type="submit"
              onClick={handleClick}
            >
              Search
            </button>
          </div>
          {error && <p className="error-msg">{error}</p>}{" "}
        </div>

        <div className="display_data">
          {city === "" ? null : (
            <h1 className="heading2 ">
              Weather condition of{" "}
              <span className="city_highlight">{city}</span> is:
            </h1>
          )}
          {city === "" ? null : <Info_Temp text={data}></Info_Temp>}
        </div>
      </div>
    </>
  );
}

export default App;
