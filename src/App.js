import "./styles.css";
import { Routes, Route, Navigate } from "react-router-dom";
import Palette from "./Palette";
import Home from "./Home";
import seedColors from "./seedColors";
import { useMatch } from "react-router-dom";
import { generatePalette } from "./colorhelpers";

export default function App() {
  function findPalette(id) {
    return seedColors.filter((palette) => {
      return palette.id === id;
    });
  }

  let {
    params: { id }
  } = useMatch("/palette/:id");

  const palette = generatePalette(findPalette(id)[0]);

  return (
    <div className="App">
      <Routes>
        {/* <Route path="*" element={<Home palette={palette}  />} /> */}
        <Route path="/" element={<Navigate replace to="/home" />} />
        <Route path="/palette/:id" element={<Palette palette={palette} />} />
        <Route exact path="/home/" element={<Home />} />
      </Routes>
    </div>
  );
}
