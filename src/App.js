import "./styles.css";
import { Routes, Route, Navigate } from "react-router-dom";
import Palette from "./Palette";
import Home from "./Home";
import { generatePalette } from "./colorhelpers";
import seedColors from "./seedColors";

export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="*" element={<Home />} />
        <Route path="/" element={<Navigate replace to="/home" />} />
        <Route exact path="/home/" element={<Home />} />
        <Route
          exact
          path="/palette/"
          element={<Palette palette={generatePalette(seedColors[4])} />}
        />
      </Routes>
    </div>
  );
}
