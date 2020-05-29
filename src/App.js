import React, { Component } from "react";
import "./components/cardOne/index";
import axios from "axios";

import "./App.css";
import CardOne from "./components/cardOne/index";

const API_KEY = process.env.REACT_APP_API_KEY;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cityName: "Columbus",
      isLoading: true,
    };
  }

  componentDidMount() {
    const { cityName, forecast } = this.state;

    const URL = `http://api.weatherstack.com/current?access_key=${API_KEY}&query=${cityName}&units=f`;
    axios
      .get()
      .then((res) => {
        return (res.data);
      })
      .then((data) => {
        this.setState({
          isLoading: false,
          temp: data.current.temperature,
          isDay: data.current.is_day,
          weather_desc: data.current.weather_descriptions,
          weather_icon: data.current.weather_icons,
          time: data.location.localtime,
          state: data.location.region,
          country: data.location.country
        });
      })

      .catch((err) => {
        console.error("error:", err);
      });
  }

  render() {
    return (
      <div className="app-container">

        <CardOne {...this.state}
          // location={cityName}
          // temperature={temp}
          // is_day={isDay}
          // weather_desc={weather_desc}
          // weather_icon={weather_icon}
        />
      </div>
    );
  }
}

export default App;
