import React, { Component } from "react";
import "rc-slider/assets/index.css";
import Slider from "rc-slider";

export default class Navbar extends Component {
  render() {
    return (
      <div>
        <div className="slider">
          <Slider
            min={100}
            max={900}
            step={100}
            value={this.props.value}
            onChange={this.props.onSliderChange}
          />
        </div>
      </div>
    );
  }
}
