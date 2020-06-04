import React from "react";
import "./style.scss";

const inputBar = (props) => {
  return (
      // <div>{props.error?  error(): null }</div>
    <nav className="navbar navbar-expand-lg navbar-light bg-light justify-content-between">
      <a className="navbar-brand">Your Weather</a>
      <form className="form-inline" onSubmit={props.loadweather}>
        <input
          className="form-control mr-sm-2"
          type="text"
          placeholder="City, State"
          aria-label="Search"
          name="city"
        />
        <button className="btn  my-2 my-sm-0" type="submit">
          Search
        </button>
      </form>
    </nav>
  );
};

function error() {
  return (
    <div className="alert alert-danger" role="alert">
      {" "}
      Enter a city to search for the weather
    </div>
  );
}

export default inputBar;
