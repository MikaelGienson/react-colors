import "./styles.css";
import { Routes, Route, Navigate } from "react-router-dom";
import Palette from "./Palette";
import PaletteList from "./PaletteList";
import SingleColorPalette from "./SingleColorPalette";
import seedColors from "./seedColors";
import { useMatch } from "react-router-dom";
import { generatePalette } from "./colorhelpers";

export default function App() {
  function findPalette(id) {
    return seedColors.filter((palette) => {
      return palette.id === id;
    });
  }

  const paletteMatch = useMatch("/palette/:id");
  const singlePaletteMatch = useMatch("/palette/:paletteId/:colorId");

  let palette = null;
  if (paletteMatch) {
    seedColors.some((element) => {
      if (element.id === paletteMatch.params.id) {
        palette = generatePalette(findPalette(paletteMatch.params.id)[0]);
        return palette;
      } else {
        palette = seedColors[0];
        return palette;
      }
    });
  } else {
    seedColors.some((element) => {
      if (element.id === singlePaletteMatch.params.paletteId) {
        palette = generatePalette(
          findPalette(singlePaletteMatch.params.paletteId)[0]
        );
        return palette;
      } else {
        palette = seedColors[0];
        return palette;
      }
    });
  }

  return (
    <div className="App">
      <Routes>
        <Route path="*" element={<PaletteList palettes={seedColors} />} />
        <Route path="/" element={<Navigate replace to="/palettelist" />} />
        <Route path="/palette/:id" element={<Palette palette={palette} />} />
        <Route
          exact
          path="/palette/:paletteId/:colorId"
          element={<SingleColorPalette palette={palette} />}
        />

        <Route
          exact
          path="/palettelist/"
          element={<PaletteList palettes={seedColors} />}
        />
      </Routes>
    </div>
  );
}
