// Add BandInput component
import React, { Component } from 'react'
// import { dispatch } from 'react-redux'

class BandInput extends Component {

state = {
    name: '',
  };


handleChange = (event) => {
  this.setState({
    name: event.target.value,
  });
};


  handleSubmit = (event) => {
    event.preventDefault();
    this.props.addBand(this.state);
    this.setState({
      name: '',
    });
  }

  render() {
    return(
      <div>
        <form onSubmit={this.handleSubmit}>
        <input
        type="text"
        placeholder="let the band play on"
        onChange={this.handleChange}
        value={this.state.name}
       />
        <input type="submit" />
        </form>
        {this.state.name}
      </div>
    )
  }
}

export default BandInput
