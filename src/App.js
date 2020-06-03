import React, { Component } from "react";
import "./components/cardOne/index";
import axios from "axios";

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
      cityName: "provo",
      isLoading: true,
      locationName: "",
    };
  }

  updateWeather() {
    const { cityName } = this.state;
    const URL = `http://api.weatherstack.com/current?access_key=${API_KEY}&query=${cityName}&units=f`;

    axios
      .get(URL)
      .then((res) => {
        console.log(res.data)
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

  componentDidMount() {
    const { eventEmitter } = this.props;

    this.updateWeather();

    eventEmitter.on("updateWeather", (data) => {
      console.log(data);
      this.setState({ cityName: data }, () => this.updateWeather());
    });
  }

  // handleSubmit = (event) => {
  //   event.preventDefault();
  //   const data = this.state.cityName;
  //   console.log(data);
  // };

  // handleChange = (event) => {
  //   event.preventDefault();
  //   console.log(event);
  //   console.log(event.target.name);
  //   console.log(event.target.value);

  //   this.setState({ [event.target.name]: event.target.value });
  // };

  render() {
    console.log(this.state.cityName);
    return (
      <div className="app-container">
        <InputBar {...this.state} eventEmitter={this.props.eventEmitter} />
        <CardOne {...this.state} />
        <CardTwo {...this.state} />
        <nav className="navbar navbar-expand-lg navbar-light bg-light justify-content-between">
          <a className="navbar-brand">Your Weather</a>
          <form className="form-inline" onSubmit={this.handleSubmit}>
            <input
              className="form-control mr-sm-2"
              type="text"
              placeholder="City Search"
              aria-label="Search"
              name="cityName"
              value={this.value}
              onChange={this.handleChange}
            />
            <button className="btn  my-2 my-sm-0" type="submit">
              Search
            </button>
          </form>
        </nav>
      </div>
    );
  }
}

export default App;
