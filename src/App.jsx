import React from "react";
import SearchBar from "./Components/SearchBar";
import Cards from "./Components/Cards";
import "./styles/main.scss";

const App = () => {
  return (
    <React.Fragment>
      <section className="App">
        <SearchBar />
        <Cards />
      </section>
    </React.Fragment>
  );
};

export default App;
