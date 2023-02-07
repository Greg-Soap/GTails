import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import App from "./Pages/App";
import SingleCocktail from "./Pages/Single";
import Navbar from "./Components/Navbar";
import "../styles/main.scss";
const PageRoute = () => {
  return (
    <div className="theme-light">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="cocktail/:id" element={<SingleCocktail />} />
        </Routes>
      </Router>
    </div>
  );
};

export default PageRoute;
