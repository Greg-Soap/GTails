import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navigate } from "react-router-dom";
import App from "../App";
import SingleCocktail from "../Pages/Single";
import Navbar from "../Components/Navbar";
import Login from "../Pages/Login";
import "../styles/main.scss";
const PageRoute = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="cocktail/:id" element={<SingleCocktail />} />
        <Route path="/Login" element={<Login />} />
      </Routes>
    </Router>
  );
};

export default PageRoute;
