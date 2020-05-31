import React, { Component } from "react";
import './style.scss'

class inputBar extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      
        <nav class="navbar navbar-expand-lg navbar-light bg-light justify-content-between">
          <a class="navbar-brand">Your Weather</a>
          <form class="form-inline">
            <input
              class="form-control mr-sm-2"
              type="search"
              placeholder="City Search"
              aria-label="Search"
            />
            <button class="btn  my-2 my-sm-0" type="submit">
              Search
            </button>
          </form>
        </nav>
     
    );
  }
}

export default inputBar;
