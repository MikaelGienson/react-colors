import "./Palette.css";
import ColorBox from "./ColorBox";
import { useState } from "react";
import Slider from "rc-slider";
import Navbar from "./Navbar";
import PaletteFooter from "./PaletteFooter";

export default function Palette({ palette }) {
  const [level, setlevel] = useState(400);
  const [model, setModel] = useState("hex");

  function onSliderChange(level) {
    setlevel(level);
  }

  function onModelChange(model) {
    setModel(model);
  }

  const colorBoxes = palette.colors[level].map((color) => (
    <ColorBox
      background={color[model]}
      name={color.name}
      key={color.id}
      id={color.id}
      paletteId={palette.id}
      showLink={true}
    />
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
      <PaletteFooter paletteName={palette.paletteName} emoji={palette.emoji} />
    </div>
  );
}
