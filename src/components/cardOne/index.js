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
    } = this.props;

    return (
      <div className="app-container">
        <div className="main-container">
          <div className="left-side">
            <div className="location-sec">
              {cityName}, {country}
            </div>
            <div className="time-sec">as of {this.handleTime} pm EST</div>
            <div className="temp-sec">
              {temp}°<div className="units-sec">F</div>
            </div>
            <div className="condition-sec">{weather_desc}</div>
          </div>
          <div className="right-side">
            <img src={weather_icon} alt="weather icon" className="img-sec" />
            <div className="high-low-sec">???????</div>
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

export default panelOne;
