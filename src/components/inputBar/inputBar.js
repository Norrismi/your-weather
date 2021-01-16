import React, { Component } from "react";
import "./style.scss";

class inputBar extends Component {

  state = {
    cityName: "",
  };


  handleChange = (e) => {
    e.preventDefault();
    this.setState({ cityName: e.target.value });
  };

  render() {
    return (
      <nav role="navigation" className="navbar navbar-light bg-light container-fullwidth  ">
        <a href="# " className="navbar-brand d-none d-md-block ">
          Your Weather
        </a>
        <form className="form-inline" onSubmit={this.props.getCity}>
          <input
            className="form-control mr-sm-2 text-truncate"
            type="text"
            placeholder="City Name"
            aria-label="Search"
            name="city"
            value={this.state.cityName}
            onChange={this.handleChange}
          />
          <button
            className="btn btn-sm  my-2 my-sm-0"
            type="submit"
          >
            Search
          </button>
        </form>
      </nav>
    );
  }
}

export default inputBar;
