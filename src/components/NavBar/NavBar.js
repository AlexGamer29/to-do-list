import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route, NavLink } from "react-router-dom";
import "./NavBar.css";
import { images } from "../../constants";

function NavBar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  const [color, setColor] = useState("FFE366");

  document.body.style.backgroundColor = color;

  return (
    <div >
        <nav className="navbar">
          <div className="nav-container">
            <NavLink exact to="/" className="nav-logo">
              <img src={images.logo} alt="logo" className="biden-logo" />
            </NavLink>

            <ul className={click ? "nav-menu active" : "nav-menu"}>
              <li className="nav-item">
                <NavLink
                  exact
                  to="/make-todolist"
                  activeClassName="active"
                  className="nav-links"
                  onClick={() => { handleClick(); setColor("FFE366"); }}
                >
                  Make todoList
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  exact
                  to="/explore"
                  activeClassName="active"
                  className="nav-links"
                  onClick={() => { handleClick(); setColor("FFE366"); }}
                >
                  Explore
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  exact
                  to="/learn"
                  activeClassName="active"
                  className="nav-links"
                  onClick={() => { handleClick(); setColor("FFE366"); }}
                >
                  Learn
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  exact
                  to="/about"
                  activeClassName="active"
                  className="nav-links"
                  onClick={() => { handleClick(); setColor("FFE366"); }}
                >
                  About
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  exact
                  to="/login"
                  activeClassName="active"
                  className="nav-links"
                  onClick={() => { handleClick(); setColor("FFE366"); }}
                >
                  Login
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  exact
                  to="/sign-up"
                  activeClassName="active"
                  className="nav-links"
                  onClick={() => { handleClick(); setColor("FFE366"); }}
                >
                  Sign up
                </NavLink>
              </li>
            </ul>
            <div className="nav-icon" onClick={handleClick}>
              <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
            </div>
          </div>
        </nav>
        
    </div>
  );
}

export default NavBar;