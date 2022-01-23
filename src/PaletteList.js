import { Link } from "react-router-dom";

export default function PaletteList(props) {
  const paletteLinks = props.palettes.map((palette) => (
    <div>
      <Link to={`/palette/${palette.id}`}>{palette.paletteName}</Link>
    </div>
  ));

  return (
    <div>
      Palette
      {paletteLinks}
    </div>
  );
}
