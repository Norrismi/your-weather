import React, { Component } from "react";
import "./style.scss";
import Img from '../resources/moon.png'

class panelOne extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="app-container">
        <div className="main-container">
          <div className="left-side">
              <div className="location-sec">Cincinnati</div>
              <div className="time-sec">as of 6:30 pm EST</div>
              <div className="temp-sec">73°</div>
              <div className="condition-sec">Cloudy</div>
          </div>
          <div className="right-side">
              <img src={Img} alt="moon" className="img-sec"/>
              <div className="high-low-sec">80°/69°</div>
          </div>
        </div>

      </div>
    );
  }
}

export default panelOne;
