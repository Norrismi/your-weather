import React, { Component } from "react";
import "./style.scss";
import momentTimezone from "moment-timezone";

class panelOne extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cityName: '',
      error: ''
    };
  }

  render() {
    const {
      cityName,
      temp,
      weather_desc,
      weather_icon,
      state,
      country,
      error,
      help,
    } = this.props;

    


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
                {momentTimezone(Date.now()).format("LL")} {" "}
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
  }
}

function errorMsg() {
  return (
    <div className="alert alert-danger" role="alert">
      {" "}
      Enter a City to search for the weather.
    </div>
  );
}

function helpMsg() {
  return (
    <div className="alert alert-success" role="alert">
      {" "}
      Enter a City to search for the weather.
    </div>
  );
}

export default panelOne;
