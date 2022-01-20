import "./Palette.css";
import ColorBox from "./ColorBox";
import { Component } from "react";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";

export default class Palette extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 100
    };
  }

  onSliderChange = (value) => {
    this.setState({
      value
    });
  };

  render() {
    const palette = this.props.palette;
    const colorBoxes = palette.colors[this.state.value].map((color) => (
      <ColorBox background={color.hex} name={color.name} />
    ));
    const style = { width: 600, margin: 50 };

    return (
      <div className="Palette">
        <div style={{ margin: 50, ...style }}>
          <Slider
            min={100}
            max={900}
            step={100}
            value={this.state.value}
            onChange={this.onSliderChange}
            railStyle={{
              height: 2
            }}
            handleStyle={{
              height: 28,
              width: 28,
              marginLeft: -14,
              marginTop: -14,
              backgroundColor: "red",
              border: 0
            }}
            trackStyle={{
              background: "none"
            }}
          />
        </div>
        <div className="Palette-colors">{colorBoxes}</div>
      </div>
    );
  }
}
