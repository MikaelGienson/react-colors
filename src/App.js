import "./styles.css";
import { Routes, Route, Navigate } from "react-router-dom";
import Palette from "./Palette";
import Home from "./Home";
import seedColors from "./seedColors";
import { generatePalette } from "./colorhelpers";

export default function App(props) {
  function findPalette(id) {
    return seedColors.filter((palette) => {
      return palette.id === id;
    });
  }

  function getId(id) {
    console.log(id);
  }

  const palette = generatePalette(findPalette("material-ui-colors")[0]);

  return (
    <div className="App">
      {getId}
      <Routes>
        {/* <Route path="*" element={<Home palette={palette}  />} /> */}
        <Route path="/" element={<Navigate replace to="/home" />} />
        <Route
          path="/palette/:id"
          element={<Palette passId={getId} palette={palette} />}
        />
        <Route exact path="/home/" element={<Home />} />
      </Routes>
    </div>
  );
}
