import React, { useEffect } from "react";
import "../Styles/header.css";
import "../Styles/media.css";
import { Link } from "react-router-dom";

const Header = ({ isLogin }) => {
  useEffect(() => {
    const handleScroll = () => {
      const header = document.querySelector("header");
      if (header) {
        header.classList.toggle("shadow", window.scrollY > 0);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <header>
      <div className="nav container">
        <a href="#" className="logo">
          Code <span>myhobby</span>
        </a>
        {isLogin ? (
          <a href="#" className="login">
            Log out
          </a>
        ) : (
          <Link to="/login" className="login">
            Sign In
          </Link>
        )}
      </div>
    </header>
  );
};

export default Header;
