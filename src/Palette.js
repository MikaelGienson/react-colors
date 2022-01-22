import "./Palette.css";
import ColorBox from "./ColorBox";
import { Component } from "react";
import Navbar from "./Navbar";

export default class Palette extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 300,
      model: "rgb"
    };
    this.onSliderChange = this.onSliderChange.bind(this);
    this.onModelChange = this.onModelChange.bind(this);
  }

  onSliderChange(value) {
    this.setState({
      value: value
    });
  }

  onModelChange(model) {
    this.setState({
      model: model
    });
  }

  render() {
    const { value, model } = this.state;
    const { palette } = this.props;

    const colorBoxes = palette.colors[value].map((color) => (
      <ColorBox background={color[model]} name={color.name} />
    ));

    return (
      <div className="Palette">
        <Navbar
          palette={palette}
          color={this.state.model}
          value={this.state.value}
          onSliderChange={this.onSliderChange}
          onModelChange={this.onModelChange}
          model={this.state.model}
        />
        <div className="Palette-colors">{colorBoxes}</div>
        <footer className="Palette-footer">
          {palette.paletteName}
          <span className="emoji">{palette.emoji}</span>
        </footer>
      </div>
    );
  }
}
