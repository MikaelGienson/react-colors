import { Link } from "react-router-dom";
import MiniPalette from "./MiniPalette";

export default function PaletteList(props) {
  const paletteLinks = props.palettes.map((palette) => (
    <div>
      <MiniPalette {...palette} />
    </div>
  ));

  return (
    <div>
      Palette
      {paletteLinks}
    </div>
  );
}

{
  /* <Link to={`/palette/${palette.id}`}>{palette.paletteName}</Link> */
}
