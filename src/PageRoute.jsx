import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import SingleCocktail from "./Pages/Single";
import Navbar from "./Components/Navbar";
import "./styles/main.scss";
import { DarkModeContext } from "./Components/darkModeContext";
import { useContext } from "react";
const PageRoute = () => {
  const { darkMode } = useContext(DarkModeContext);
  return (
    <div className={`theme-${darkMode ? "dark" : "light"}`}>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="cocktail/:id" element={<SingleCocktail />} />
        </Routes>
      </Router>
    </div>
  );
};

export default PageRoute;
