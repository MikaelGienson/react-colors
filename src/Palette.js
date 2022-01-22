import "./Palette.css";
import ColorBox from "./ColorBox";
import { useState } from "react";
import { useParams } from "react-router";
import Slider from "rc-slider";
import Navbar from "./Navbar";

export default function Palette({ palette }, props) {
  const [level, setlevel] = useState(100);
  const [model, setModel] = useState("hex");

  const { id } = useParams();

  function onSliderChange(level) {
    setlevel(level);
  }

  function onModelChange(model) {
    setModel(model);
    props.pass(id);
  }

  const colorBoxes = palette.colors[level].map((color) => (
    <ColorBox background={color[model]} name={color.name} />
  ));

  return (
    <div className="Palette">
      <div className="slider-container">
        <span>Level: {level}</span>
        <div className="slider">
          <Slider
            defaultValue={level}
            min={100}
            max={900}
            step={100}
            onChange={onSliderChange}
          />
        </div>
      </div>
      <Navbar
        palette={palette}
        color={model}
        level={level}
        onSliderChange={onSliderChange}
        onModelChange={onModelChange}
        model={model}
      />
      <div className="Palette-colors">{colorBoxes}</div>
      <footer className="Palette-footer">
        {palette.paletteName}
        <span className="emoji">{palette.emoji}</span>
      </footer>
    </div>
  );
}
