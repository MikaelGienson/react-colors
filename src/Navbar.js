import React, { Component } from "react";
import "rc-slider/assets/index.css";
import Slider from "rc-slider";
import "./Navbar.css";

export default class Navbar extends Component {
  render() {
    return (
      <header className="Navbar">
        <div className="logo">
          <a href="#">react color picker</a>
        </div>
        <div className="slider-container">
          <span>Level: {this.props.value}</span>
          <div className="slider">
            <Slider
              defaultValue={this.props.value}
              min={100}
              max={900}
              step={100}
              onChange={this.props.onSliderChange}
            />
          </div>
        </div>
      </header>
    );
  }
}
