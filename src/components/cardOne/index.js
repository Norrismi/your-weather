import React, { Component } from "react";
import "./style.scss";

class panelOne extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const {
      cityName,
      temp,
      isDay,
      weather_desc,
      weather_icon,
      time,
      state,
      country,
      error,
    } = this.props;

    return (
      <div className="app-container">
      <div className="error">{!cityName  ? errorMsg() : null}</div>
        <div className="main-container">
          <div className="left-side">
            {cityName ? (
              <div className="location-sec">
                {cityName}, {country}
              </div>
            ) : null}

            {cityName ? (
              <div className="time-sec">as of {this.handleTime} pm EST</div>
            ) : null}

            {temp ? (
              <div className="temp-sec">
                {temp}°<div className="units-sec">F</div>
              </div>
            ) : null}

            <div className="condition-sec">{weather_desc}</div>
          </div>
          <div className="right-side">
            {cityName ? (
              <img src={weather_icon} alt="weather icon" className="img-sec" />
            ) : null}
            {/* <div className="high-low-sec">???????</div> 
              Slide the current left description over 
            */}
          </div>
        </div>
      </div>
    );
  }
  // handleTime = (time)  => {
  //   const {time} = this.props
  //   console.log(time)
  //   let whatTime = time.split(" ").slice(1).toString();
  //   let hour = whatTime.substring(0, 2);
  //   let min = whatTime.substring(3, 5);
  //   return (hour > 12) ? `${hour - 12}:${min}` : `${hour}:${min}`;
  // }
}

function errorMsg() {
  return (
    <div className="alert alert-danger" role="alert">
      {" "}
      Enter a city to search for the weather
    </div>
  );
}

export default panelOne;
