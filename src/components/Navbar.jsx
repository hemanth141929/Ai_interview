import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import logo from "../assets/logo.jpg";   // replace with your logo
import bgimg from "../assets/bgimg.jpg"; // replace with your background

const Navbar = () => {
  return (
    <header
      className="navbar"
      style={{ backgroundImage: `url(${bgimg})` }}
    >
      <div className="navbar-container">
        {/* Logo Section */}
        <div className="logo">
          <img src={logo} alt="Logo" />
          <h1>MyBrand</h1>
        </div>

        {/* Navigation Links */}
        <nav className="nav-links">
          <Link to="/home">Home</Link>
          <Link to="/profile">Profile</Link>
          <Link to="/about">About</Link>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;


