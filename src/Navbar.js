import React, { useState } from "react";
import Select from "@material-ui/core/Select";
import { MenuItem } from "@mui/material";
import Snackbar from "@mui/material/Snackbar";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import "rc-slider/assets/index.css";

import "./Navbar.css";
import { Link } from "react-router-dom";

export default function Navbar(props) {
  const [open, setOpen] = useState(false);

  function handleChange(e) {
    props.onModelChange(e.target.value);
    setOpen({ open: true });
  }

  function handleClose() {
    setOpen({ open: false });
  }

  const action = (
    <React.Fragment>
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={handleClose}
        key="close"
        aria-label="close"
      >
        <CloseIcon fontSize="small" />
      </IconButton>
    </React.Fragment>
  );

  return (
    <header className="Navbar">
      <div className="logo">
        <Link to="/home/">react color picker</Link>
      </div>

      <div className="select-container">
        <Select value={props.model} onChange={handleChange}>
          <MenuItem value="hex">hex</MenuItem>
          <MenuItem value="rgb">rgb</MenuItem>
          <MenuItem value="rgba">rgba</MenuItem>
        </Select>
      </div>
      <div clasaName="Snackbar">
        <Snackbar
          anochorOrigin={{ vertical: "bottom", horizontal: "left" }}
          open={open}
          autoHideDuration={3000}
          onClose={handleClose}
          message={
            <span id="message-id">
              Format Changed to {props.model.toUpperCase()}
            </span>
          }
          ContentProps={{
            "aria-describedby": "message-id"
          }}
          action={action}
        />
      </div>
    </header>
  );
}
