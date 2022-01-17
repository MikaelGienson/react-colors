import "./Palette.css";
import { FaBeer } from "react-icons/fa";

export default function Palette() {
  const palette = [
    "green",
    "yellow",
    "blue",
    "pink",
    "magenta",
    "green",
    "teal",
    "blue",
    "pink",
    "magenta",
    "green",
    "yellow",
    "blue",
    "tela",
    "magenta",
    "green",
    "yellow",
    "teal",
    "pink",
    "magenta"
  ];

  const colorBoxes = palette.map((c) => (
    <div style={{ backgroundColor: `${c}` }}></div>
  ));

  return (
    <div>
      <div className="container">
        <div className="Palette">{colorBoxes}</div>
        <div className="container-text">
          <div>Material Ui Colors</div>
          <i className="icon">
            <FaBeer />
          </i>
        </div>
      </div>
      ;
    </div>
  );
}
