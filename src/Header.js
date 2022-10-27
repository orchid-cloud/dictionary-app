import React from "react";
import logo from "./images/logo-shecodes.png";
import "./Header.css";

export default function Header() {
  return (
    <div className="Header ">
      <img src={logo} alt="logo" className="logo img-fluid" />
    </div>
  );
}
