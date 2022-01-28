import "./ColorBox.css";
import { Link } from "react-router-dom";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { Component } from "react";
import chroma from "chroma-js";
import { makeStyles } from "@mui/styles";

export default class ColorBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      copied: false
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({ copied: true }, () => {
      setTimeout(() => this.setState({ copied: false }), 1500);
    });
  }

  render() {
    const { name, background, key, id, paletteId, showLink } = this.props;
    const isDarkColor = chroma(background).luminance() <= 0.08;
    const isLightColor = chroma(background).luminance() >= 0.6;

    return (
      <CopyToClipboard text={background} onCopy={this.handleClick}>
        <div style={{ background }} className="ColorBox">
          <div
            style={{ background }}
            className={`copy-overlay ${this.state.copied && "show"}`}
          />
          <div className={`copy-msg ${this.state.copied && "show"}`}>
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
}
