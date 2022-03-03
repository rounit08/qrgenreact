import React from "react";
import img from "../images/navbarimage.png";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <img src={img} alt="hello" className="navbarImage" />
      <h1 className="navbarText">QR GENERATOR</h1>
    </div>
  );
};

export default Navbar;
