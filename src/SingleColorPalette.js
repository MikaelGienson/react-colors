import ColorBox from "./ColorBox";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import PaletteFooter from "./PaletteFooter";

export default function SingleColorPalette(props) {
  const [model, setModel] = useState("hex");
  let navigate = useNavigate();

  const { palette, colorId } = props;

  let shades = gatherShades(palette, colorId);

  function gatherShades(palette, colorToFilterBy) {
    let shades = [];
    let allColors = palette.colors;

    for (let key in allColors) {
      shades = shades.concat(
        allColors[key].filter((color) => color.id === colorToFilterBy)
      );
    }
    return shades.slice(1);
  }

  function onModelChange(model) {
    setModel(model);
  }

  const colorBoxes = shades.map((color) => (
    <ColorBox
      key={color.name}
      name={color.name}
      background={color[model]}
      showLink={false}
    />
  ));

  return (
    <div className="SingleColorPalette Palette">
      <Navbar onModelChange={onModelChange} model={model} />
      <div className="Palette-colors">
        {colorBoxes}
        <div className="go-back ColorBox">
          <button
            onClick={() => navigate(`/palette/${palette.id}`)}
            className="back-button"
          >
            Go Back
          </button>
        </div>
      </div>
      <PaletteFooter paletteName={palette.paletteName} emoji={palette.emoji} />
    </div>
  );
}
