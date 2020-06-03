import React, { Component } from "react";
import "./style.scss";

class inputBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      
    };
  }

  onLocationNameChange (e) {
    this.setState({ locationName: e.target.value })
    
  };

  onSelectCity = () => {
    const {locationName} = this.state;
    const {eventEmitter} = this.props;
   

    eventEmitter.emit('updateWeather', locationName )
  };

  render() {
    const { eventEmitter } = this.props;
    console.log();

    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light justify-content-between">
        <a className="navbar-brand">Your Weather</a>
        <form className="form-inline" onSubmit={this.props.handleSubmit}>
          <input
            className="form-control mr-sm-2"
            type="text"
            placeholder="City Search"
            aria-label="Search"
            //='cityName'
            value={this.value}
            onChange={this.onLocationNameChange.bind(this)}
          />
          <button
            className="btn  my-2 my-sm-0"
            onClick={this.onSelectCity}
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
