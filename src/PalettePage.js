import "./PalettePage.css";

export default function PalettePage() {
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

  const style = {
    height: "100px",
    width: "100px",
    display: "grid",
    gridTemplateColumns: "20vw 20vw 20vw"
  };

  const colorBoxes = palette.map((c) => (
    <div style={{ backgroundColor: `${c}`, ...style }}></div>
  ));

  return <div className="PalettePage">{colorBoxes}</div>;
}
