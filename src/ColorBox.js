import "./ColorBox.css";
import { CopyToClipboard } from 'react-copy-to-clipboard'
import { Component } from 'react'

export default class ColorBox extends Component{
  constructor(props){
    super(props);
    this.state = {
      copied: false,
    }
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
    setState({ copied: true }, 
    () => {setTimeout(() => setState({ copied: false }, 1500))}
    )
    
  }

  render() {
  const { name, background } = this.props;
  

  return (
    <CopyToClipboard text={ background } onCopy={this.handleClick}>
      <div style={{ background }} className="ColorBox">
        <div style={{ background }} className={`copy-overlay ${this.state.copied && 'show'}`}/>
        <div className={`copy-msg ${this.state.copied && 'show'}`}>
          <h1>Copied!</h1>
          <p>{ background }</p>
        </div>
        <div className="copy-containter">
          <div className="box-content">
            <span>{name}</span>
          </div>
            <button className="copy-button">Copy</button>
        </div>
        <span className="see-more">More</span>
      </div>
    </CopyToClipboard>
  );
}
}

