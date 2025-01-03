import React, { useState } from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom

import './navbar.css';
import AppBar from '@mui/material/AppBar';
import Toolbar from "../components/Toolbar";
// import Events from './events';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const openNav = () => {
    setIsOpen(true);
    document.body.classList.add("no-scroll"); // Lock scrolling when overlay opens
  };

  const closeNav = () => {
    setIsOpen(false);
    document.body.classList.remove("no-scroll"); // Unlock scrolling when overlay closes
  };

  return (
    <div>
      <AppBar sx={{backgroundColor:'#444'}} position="fixed">
        <Toolbar sx={{ justifyContent: "space-between" }}>
          {/* Navbar with menu icon */}
          <div className="navbar">
            <span className="logo">
              <img
                className="logo-img"
                src="https://upload.wikimedia.org/wikipedia/commons/7/75/Eo_circle_green_letter-e.svg"
                alt="Logo"
              />
            </span>
            <span className="menu-icon" onClick={openNav}>
              &#9776;
            </span>
          </div>

          {/* Overlay */}
          <div
            id="overscr"
            className={`overlay ${isOpen ? "open" : ""}`}
            style={{ width: isOpen ? "100%" : "0" }}
          >
            <a href="javascript:void(0)" className="closebtn" onClick={closeNav}>
              &times;
            </a>
            <div className="overlay-content">
              <span className="logo">
                <img
                  className="logo-img"
                  src="https://upload.wikimedia.org/wikipedia/commons/7/75/Eo_circle_green_letter-e.svg"
                  alt="Logo"
                />
              </span>
              {/* Replace anchor tags with Link components */}
              <Link to="/home" onClick={closeNav}>
                Home
              </Link>
              <Link to="/events" onClick={closeNav}>
                Events
              </Link>
              <Link to="/points" onClick={closeNav}>
                Points
              </Link>
              <Link to="/portfolio" onClick={closeNav}>
                Portfolio
              </Link>
              <Link to="/contact" onClick={closeNav}>
                Contact
              </Link>
            </div>
          </div>
        </Toolbar>
      </AppBar>
      <Toolbar />
    </div>
  );
}

export default Navbar;
