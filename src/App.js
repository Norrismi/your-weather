import React, { Component } from "react";
import "./components/cardOne/index";
import "./App.css";
import InputBar from "./components/inputBar/inputBar";
import CardOne from "./components/cardOne/index";
import CardTwo from "./components/cardTwo/index";

const API_KEY = process.env.REACT_APP_API_KEY;

class App extends Component {

  state = {
    cityName: "",
    error: false,
    help: true,
  };


  getWeather = async (e) => {
    e.preventDefault();



    const city = e.target.elements.city.value;

    if (city) {
      const apiCall = await fetch(
        `http://api.weatherstack.com/current?access_key=${API_KEY}&query=${city}&units=f`
      );

      const data = await apiCall.json();
      console.log(data)

      this.setState({
        temp: data.current.temperature,
        weather_desc: data.current.weather_descriptions,
        weather_icon: data.current.weather_icons,
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
        error: false,
        help: false,
      });
    } else {
      this.setState({ error: true })
    }
  };

  render() {
    return (
      <div className="app-container">
        <InputBar getCity={this.getWeather} />
        <CardOne {...this.state} />
        <CardTwo {...this.state} />
      </div>
    );
  }
}

export default App;
