import React from "react";
import "../styles/main.scss";
import { BsFillMoonFill, BsFillSunFill } from "react-icons/bs";
import { AiOutlineLogin } from "react-icons/ai";
import { Link } from "react-router-dom";
import { useState } from "react";

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(true);
  return (
    <nav className="Navbar">
      <div className="Wrapper">
        <div className="BrandWrapper">
          <span className="BrandSpan">Cocktails</span>
        </div>
        <div className="Right">
          <div className="theme-icon">
            <button className="Btn" onClick={() => setDarkMode(!darkMode)}>
              {darkMode ? (
                <BsFillSunFill
                  style={{ color: "yellow", fontSize: "1.5rem" }}
                />
              ) : (
                <BsFillMoonFill style={{ fontSize: "1.5rem" }} />
              )}
            </button>
          </div>
          <Link className="Login" to="/Login">
            <AiOutlineLogin
              style={{ fontSize: "1.5rem", backgroundColor: "transparent" }}
            />
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
