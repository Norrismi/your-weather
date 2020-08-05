import React from "react";
import "./style.scss";
import momentTimezone from "moment-timezone";

const cardOne = (props) => {
  
  const errorMsg = () => {
    return (
      <div className="alert alert-danger" role="alert">
        {" "}
        Enter a City
      </div>
    );
  };

  const helpMsg = () => {
    return (
      <div className="alert alert-success" role="alert">
        {" "}
        Enter a City to search for the weather.
      </div>
    );
  };

  const {
    cityName,
    temp,
    weather_desc,
    weather_icon,
    state,
    country,
    error,
    help,
  } = props;

  return (
    <div className="app-container">
      <div className="error">{help ? helpMsg() : null}</div>
      <div className="error">{error ? errorMsg() : null}</div>
      <div className="main-container">
        <div className="left-side">
          {cityName ? (
            <div>
              <div className="location-sec">
                {cityName}, {state}, {country}
              </div>
              <div className="cell-location-sec">
                {cityName}, {state}
              </div>
            </div>
          ) : null}

          {cityName ? (
            <div className="time-sec">
              {momentTimezone(Date.now()).format("LL")}{" "}
            </div>
          ) : null}
          <div className="temp-master">
            {temp ? (
              <div className="temp-sec">
                {temp}°<div className="units-sec">F</div>
              </div>
            ) : null}
          </div>
        </div>
        <div className="right-side">
          {cityName ? (
            <img src={weather_icon} alt="weather icon" className="img-sec" />
          ) : null}
          <div className="condition-sec">{weather_desc}</div>
        </div>
      </div>
    </div>
  );
};

export default cardOne;
