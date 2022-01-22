import React, { Component } from "react";
import Select from "@material-ui/core/Select";
import { MenuItem } from "@mui/material";
import Snackbar from "@mui/material/Snackbar";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import "rc-slider/assets/index.css";
import Slider from "rc-slider";
import "./Navbar.css";

export default class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }

  handleChange(e) {
    this.props.onModelChange(e.target.value);
    this.setState({ open: true });
  }

  handleClose() {
    this.setState({ open: false });
  }

  render() {
    const action = (
      <React.Fragment>
        <IconButton
          size="small"
          aria-label="close"
          color="inherit"
          onClick={this.handleClose}
          key="close"
          aria-label="close"
        >
          <CloseIcon fontSize="small" />
        </IconButton>
      </React.Fragment>
    );

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
        <div className="select-container">
          <Select value={this.props.model} onChange={this.handleChange}>
            <MenuItem value="hex">hex</MenuItem>
            <MenuItem value="rgb">rgb</MenuItem>
            <MenuItem value="rgba">rgba</MenuItem>
          </Select>
        </div>
        <div clasaName="Snackbar">
          <Snackbar
            anochorOrigin={{ vertical: "bottom", horizontal: "left" }}
            open={this.state.open}
            autoHideDuration={3000}
            onClose={this.handleClose}
            message={
              <span id="message-id">
                Format Changed to {this.props.model.toUpperCase()}
              </span>
            }
            ContentProps={{
              "aria-describedby": "message-id"
            }}
            action={action}
          />
        </div>
      </header>
    );
  }
}
