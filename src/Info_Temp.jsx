import React from "react";
import "./Info_Temp.css";

function Info_Temp({ text }) {
  return (
    <div className="container text-center">
      <div className="row row-cols-2">
        <div className="col">
          <h5 className="card-title">Country</h5>
          <p className="card-text">{text.country}</p>
        </div>

        <div className="col">
          <h5 className="card-title">Description</h5>
          <p className="card-text">{text.description}</p>
        </div>

        <div className="col">
          <h5 className="card-title">Temperature</h5>
          <p className="card-text">{text.temperature} °C</p>
        </div>

        <div className="col">
          <h5 className="card-title">Humidity</h5>
          <p className="card-text">{text.humidity}%</p>
        </div>
      </div>
    </div>
  );
}

export default Info_Temp;

