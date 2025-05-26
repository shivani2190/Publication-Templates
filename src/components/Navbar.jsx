import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <h1>Employee Portal</h1>
      <div className="nav-links">
        <Link to="/">Publications</Link>
        <Link to="/authorship">Authorship</Link>
        <Link to="/writing-service">Writing Service</Link>
        <Link to="/focus-journals">Focus Journals</Link>
        <Link to="/terminologies">Terminologies</Link>
      </div>
    </nav>
  );
}

export default Navbar;
