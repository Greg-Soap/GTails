import React from "react";
import "../styles/main.scss";
import { BsFillMoonFill, BsFillSunFill } from "react-icons/bs";
import { AiOutlineLogin } from "react-icons/ai";
import { Link } from "react-router-dom";

const Login = styled(Link)``;
const Right = styled.div``;
const Btn = styled.button``;
const ThemeIcon = styled.div``;
const Navbar = ({ darkMode, setDarkMode }) => {
  return (
    <nav className="Navbar">
      <div className="Wrapper">
        <div className="BrandWrapper">
          <div className="BrandName">Greg's</div>
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
            <AiOutlineLogin style={{ fontSize: "1.5rem" }} />
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
