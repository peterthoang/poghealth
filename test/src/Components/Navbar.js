import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { Button } from "./Button";

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener("resize", showButton);

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
            POGHealth
          </Link>
          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"} />
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/Food" className="nav-links" onClick={closeMobileMenu}>
                Food Intake/Recommendations
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/Exercise"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Exercise
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/Tracker"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Tracker
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/Profile"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Profile
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/sign-in"
                className="nav-links-mobile"
                onClick={closeMobileMenu}
              >
                Sign In
              </Link>
            </li>
          </ul>
          {button && <Button buttonStyle="btn--outline">SIGN IN</Button>}
        </div>
      </nav>
    </>
  );
}

export default Navbar;
