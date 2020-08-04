import React, {Component} from "react";
import "./style.scss";

class inputBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cityName: ''
    };
  }
  
  handleChange =(e)=>{
    e.preventDefault()
    this.setState({ cityName: e.target.value }); 
  } 

  handleSubmit = (e) => {
    e.preventDefault()
    this.setState({ cityName:'' })
  }


  render(){
  
  return (
    // <div>{props.error?  error(): null }</div>
    <nav role="navigation" className="navbar navbar-light bg-light  ">
      <a href='# ' className="navbar-brand d-none d-md-block ">Your Weather</a>
      <form className="form-inline" onSubmit={ 
        this.props.handleSubmit
      
        }>
        <input
          className="form-control mr-sm-2"
          type="text"
          placeholder="City Name"
          aria-label="Search"
          name='city'
          value={this.state.cityName}
         onChange={this.handleChange}
          />
        <button className="btn btn-sm  my-2 my-sm-0" type="submit"  >
          Search
        </button>
      </form>
    </nav>
  );
}
};


export default inputBar;
