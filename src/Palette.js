import "./Palette.css";
import ColorBox from "./ColorBox";

export default function Palette(props) {
  const palette = props.palette;
  console.log(palette)
  const colorBoxes = palette.colors.map((color) => (
    <ColorBox background={color.color} name={color.name} />
  ));
  return (
    <div className="Palette">
      <div className="Palette-colors">{colorBoxes}</div>
    </div>
  );
}
