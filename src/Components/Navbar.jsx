// This component renders the Navbar component in the app

import React, { useContext } from "react";
import "../styles/main.scss";
import { BsFillMoonFill, BsFillSunFill } from "react-icons/bs";
import { DarkModeContext } from "./darkModeContext";

export default function Navbar() {
  // Get the darkMode state and toggle function from the DarkModeContext
  const { toggle, darkMode } = useContext(DarkModeContext);

  return (
    <nav className="Navbar">
      <div className="Wrapper">
        {/*  Brand name of the app  */}
        <div className="BrandWrapper">
          <span className="BrandSpan">Cocktails</span>
        </div>
        <div className="Right">
          {/* Theme toggle button */}
          <div className="theme-icon">
            <button className="Btn" onClick={toggle}>
              {/*  Show sun or moon icon depending on the current theme */}
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
}
