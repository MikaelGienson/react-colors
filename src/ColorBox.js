import "./ColorBox.css";
import { Link } from "react-router-dom";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { useState } from "react";
import chroma from "chroma-js";
import { makeStyles } from "@mui/styles";

export default function ColorBox(props) {
  const [copied, setCopied] = useState();

  function handleClick() {
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  }

  const { name, background, key, id, paletteId, showLink } = props;
  const isDarkColor = chroma(background).luminance() <= 0.08;
  const isLightColor = chroma(background).luminance() >= 0.6;

  return (
    <CopyToClipboard text={background} onCopy={handleClick}>
      <div style={{ background }} className="ColorBox">
        <div
          style={{ background }}
          className={`copy-overlay ${copied && "show"}`}
        />
        <div className={`copy-msg ${copied && "show"}`}>
          <h1>Copied!</h1>
          <p>{background}</p>
        </div>

        <div className="copy-containter">
          <div className="box-content">
            <span className={isLightColor && "dark-text"}>{name}</span>
          </div>

          <button className={`copy-button ${isLightColor && "dark-text"}`}>
            Copy
          </button>
        </div>
        {showLink ? (
          <Link
            to={`/palette/${paletteId}/${id}`}
            onClick={(e) => e.stopPropagation()}
          >
            <span className={`see-more ${isLightColor && "dark-text"}`}>
              More
            </span>
          </Link>
        ) : (
          ""
        )}
      </div>
    </CopyToClipboard>
  );
}
