import React, { Component } from "react";
import "./components/cardOne/index";
import axios from "axios";

import "./App.css";
import InputBar from "./components/inputBar/inputBar";
import CardOne from "./components/cardOne/index";
import CardTwo from "./components/cardTwo/index";

const API_KEY = process.env.REACT_APP_API_KEY;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cityName: "Charleston",
      isLoading: true,
    };
  }

  componentDidMount() {
    const { cityName, forecast } = this.state;

    const URL = `http://api.weatherstack.com/current?access_key=${API_KEY}&query=${cityName}&units=f`;
    axios
      .get()
      .then((res) => {
        return res.data;
      })
      .then((data) => {
        this.setState({
          isLoading: false,
          temp: data.current.temperature,
          isDay: data.current.is_day,
          weather_desc: data.current.weather_descriptions,
          weather_icon: data.current.weather_icons,
          time: data.location.localtime,
          cityName: data.location.name,
          state: data.location.region,
          country: data.location.country,
          feelLikeTemp: data.current.feelslike,
          humidity: data.current.humidity,
          pressure: data.current.pressure,
          vis: data.current.visibility,
          windDir: data.current.wind_dir,
          windSpeed: data.current.wind_speed,
          cloudCover: data.current.cloudcover,
          uvIndex: data.current.uv_index,
        });
      })

      .catch((err) => {
        console.error("error:", err);
      });
  }

  render() {
    return (
      <div className="app-container">
        <InputBar />
        <CardOne {...this.state} />
        <CardTwo {...this.state} />
      </div>
    );
  }
}

export default App;
