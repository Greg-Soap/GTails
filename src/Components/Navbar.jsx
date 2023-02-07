import React, { useContext } from "react";
import "../styles/main.scss";
import { BsFillMoonFill, BsFillSunFill } from "react-icons/bs";
import { AiOutlineLogin } from "react-icons/ai";
import { Link } from "react-router-dom";
import { DarkModeContext } from "./darkModeContext";

const Navbar = () => {
  const { toggle, darkMode } = useContext(DarkModeContext);
  return (
    <nav className="Navbar">
      <div className="Wrapper">
        <div className="BrandWrapper">
          <span className="BrandSpan">Cocktails</span>
        </div>
        <div className="Right">
          <div className="theme-icon">
            <button className="Btn" onClick={toggle}>
              {darkMode ? (
                <BsFillSunFill style={{ color: "white", fontSize: "1.5rem" }} />
              ) : (
                <BsFillMoonFill
                  style={{ fontSize: "1.5rem", color: "white" }}
                />
              )}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
