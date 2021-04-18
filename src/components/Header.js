import React from "react";
import "../styles/Header.css";
import { Link } from "react-router-dom";
import pokemon from "../images/pokemon.png";

class Header extends React.Component {
  render() {
    return (
      <div className="Header">
        <nav className="navbar">
          <Link to="/">
            <img className="Header-logo" src={pokemon} alt="Pokemon Logo" />
          </Link>
          <Link to="/game" className="Header-link">
            Fight
          </Link>
        </nav>
      </div>
    );
  }
}

export default Header;
