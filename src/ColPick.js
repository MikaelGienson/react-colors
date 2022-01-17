import "./styles.css";
import { ColorPicker, useColor } from "react-color-palette";
import "react-color-palette/lib/css/styles.css";

export default function ColPick() {
  const [color, setColor] = useColor("rgb", "#51212");

  return (
    <div className="Palette">
      <h1>Color Picker</h1>
      <ColorPicker
        width={456}
        height={228}
        color={color}
        onChange={setColor}
        hideHSV
      />
      ;
    </div>
  );
}
