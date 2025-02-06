import React from "react";
import "../Styles/header.css";

const Header = () => {
  return (
    <header>
      <div className="nav container">
        <a href="#" className="logo">
          Code <span>myhobby</span>
        </a>
        <a href="#" className="login">
          Sign Up
        </a>
      </div>
    </header>
  );
};

export default Header;
