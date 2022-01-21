import "./Palette.css";
import ColorBox from "./ColorBox";
import { Component } from "react";
import Navbar from "./Navbar";

export default class Palette extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 100
    };
    this.onSliderChange = this.onSliderChange.bind(this);
  }

  onSliderChange(value) {
    this.setState({
      value
    });
  }

  render() {
    const { value } = this.state;
    const { palette } = this.props;
    const colorBoxes = palette.colors[value].map((color) => (
      <ColorBox background={color.hex} name={color.name} />
    ));

    return (
      <div className="Palette">
        <Navbar value={this.state.value} onSliderChange={this.onSliderChange} />
        <div className="Palette-colors">{colorBoxes}</div>
      </div>
    );
  }
}
