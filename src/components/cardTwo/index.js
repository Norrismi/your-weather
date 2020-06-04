import React, { Component } from "react";
import "./style.scss";

class cardTwo extends Component {

  render() {
    const {
      state,
      cityName,
      feelLikeTemp,
      humidity,
      pressure,
      vis,
      windDir,
      windSpeed,
      cloudCover,
      uvIndex,
    } = this.props;
    return (

      cityName? 
      <div className="app-bucket">
        <div className="main-bucket">
       
          <div className="leftSide">
            <div className="feel-like-unit">
              {feelLikeTemp}°<div className="fl-desc">Feels Like</div>
            </div>
            <div className="humidity-label" id="info">
              Humidity
              <div className="humidity-units" id="info">
                {humidity}%
              </div>
            </div>
            <div className="pressure-label" id="info">
              Pressure
              <div className="pressure-units" id="info">
                {pressure} mb
              </div>
            </div>

            <div className="visibility-label" id="info">
              Visibility
              <div className="visibility-units" id="info">
                {vis} miles
              </div>
            </div>
          </div>

          <div className="right-side2">
            <div className="location">
              Weather today in {cityName}, {state}
            </div>
            <div className="wind-label" id="info">
              {" "}
              Wind
              <div className="wind-dir" id="info">
                {windDir}
                <div className="wind-units" id="info">
                  {" "}
                  {windSpeed} mph
                </div>
              </div>
            </div>

            <div className="cloud-cover-label" id="info">
              Cloud Coverage
              <div className="cloud-cover-units" id="info">
                {cloudCover}%
              </div>
            </div>
            <div className="uv-index-label" id="info">
              UV Index
              <div className="uv-index-units" id="info">
                {uvIndex} of 15
              </div>
            </div>
          </div>
        </div>
      </div>
      : null
    );
  }
}

export default cardTwo;
