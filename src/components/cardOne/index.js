import React, { Component } from "react";
import "./style.scss";
import moment from 'moment'

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
      help
    } = this.props;

console.log(Date.now())

    return (
      <div className="app-container">
        <div className="error">{help ? helpMsg() : null}</div>
          <div className="error">{error ? errorMsg() : null}</div>
        <div className="main-container">
          <div className="left-side">
            {cityName ? (
              <div className="location-sec">
                {cityName}, {state}, {country}
              </div>
            ) : null}

            {cityName ? <div className="time-sec">{moment(Date.now()).format('LLL')} </div> : null}
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

//  function handleTime(time)  {
//     //const {time} = this.props
//     console.log(time)
//     // let whatTime = time.split(" ").slice(1).toString();
//     // let hour = whatTime.substring(0, 2);
//     // let min = whatTime.substring(3, 5);
//     // return (hour > 12) ? `${hour - 12}:${min}` : `${hour}:${min}`;
//   }

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
