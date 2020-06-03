import React, { Component } from "react";
import "./components/cardOne/index";


import "./App.css";
import store from "./store";
import InputBar from "./components/inputBar/inputBar";
import CardOne from "./components/cardOne/index";
import CardTwo from "./components/cardTwo/index";

const API_KEY = process.env.REACT_APP_API_KEY;

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      cityName: "",
      isLoading: true,
      locationName: "",
    };
  }

  getWeather = async (e) => {
    e.preventDefault();

    const city = e.target.elements.city.value;

    const apiCall = await fetch(
      `http://api.weatherstack.com/current?access_key=${API_KEY}&query=${city}&units=f`
    );

    const data = await apiCall.json();
    console.log(data);

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
  };

  render() {
    console.log(this.state.cityName);
    return (
      <div className="app-container">
        <InputBar loadweather={this.getWeather} />
        <CardOne {...this.state} />
        <CardTwo {...this.state} />
      </div>
    );
  }
}

export default App;
