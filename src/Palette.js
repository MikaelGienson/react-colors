import "./Palette.css";
import ColorBox from "./ColorBox";

export default function Palette(props) {
  const palette = props.palette;
  const colorBoxes = palette.colors['300'].map((color) => (
    <ColorBox background={color.hex} name={color.name} />
  ));
  return (
    <div className="Palette">
      <div className="Palette-colors">{colorBoxes}</div>
    </div>
  );
}
