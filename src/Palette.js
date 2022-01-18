import "./Palette.css";
import seedColors from "./seedColors";
import ColorBox from "./ColorBox";

export default function PalettePage() {
  const palette = { ...seedColors[2] };
  const colorBoxes = palette.colors.map((color) => (
    <ColorBox background={color.color} name={color.name} />
  ));
  return (
    <div className="Palette">
      <div className="Palette-colors">{colorBoxes}</div>
    </div>
  );
}
