import React, { Component } from "react";
import Select from "@material-ui/core/Select";
import { MenuItem } from "@mui/material";

import "rc-slider/assets/index.css";
import Slider from "rc-slider";
import "./Navbar.css";

export default class Navbar extends Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.props.onModelChange(e.target.value);
  }

  render() {
    const pal = this.props.palette;
    return (
      <header className="Navbar">
        {console.log(pal)}
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
        <div>
          <Select
            defaultValue={"rgb"}
            value={this.props.model}
            onChange={this.handleChange}
          >
            <MenuItem value="hex">hex</MenuItem>
            <MenuItem value="rgb">rgb</MenuItem>
            <MenuItem value="rgba">rgba</MenuItem>
          </Select>
        </div>
      </header>
    );
  }
}
