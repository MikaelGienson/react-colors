import { Link } from "react-router-dom";

export default function Home() {
  function getPaletteName() {}

  return (
    <div>
      <div className="app-container"></div>
      <h1>Hello I am the home page</h1>
      <div>
        <Link to="palettename"></Link>
        <div>palette name 1</div>
        <div>palette name 2</div>
      </div>
    </div>
  );
}
