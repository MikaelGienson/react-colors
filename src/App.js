import "./styles.css";
import { Routes, Route, Navigate } from "react-router-dom";
import Palette from "./Palette";
import PaletteList from "./PaletteList";
import seedColors from "./seedColors";
import { useMatch } from "react-router-dom";
import { generatePalette } from "./colorhelpers";

export default function App() {
  function findPalette(id) {
    return seedColors.filter((palette) => {
      return palette.id === id;
    });
  }

  let idx = useMatch("/palette/:id");

  const palette =
    idx === null
      ? generatePalette(seedColors[0])
      : generatePalette(findPalette(idx.params.id)[0]);

  return (
    <div className="App">
      <Routes>
        <Route path="*" element={<PaletteList palettes={seedColors} />} />
        <Route path="/" element={<Navigate replace to="/palettelist" />} />
        <Route path="/palette/:id" element={<Palette palette={palette} />} />
        <Route
          exact
          path="/palettelist/"
          element={<PaletteList palettes={seedColors} />}
        />
        <Route
          exact
          path="/palette/:paletteId/:colorId"
          element={<h1>Single Color Page</h1>}
        />
      </Routes>
    </div>
  );
}
