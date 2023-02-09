import React from "react";
import SearchBar from "../Components/SearchBar"; // Import the SearchBar component
import Cards from "../Components/Cards"; // Import the Cards component
import "../styles/main.scss";

export default function Home() {
  return (
    <>
      {/*  Main section container  */}
      <section className="App">
        <SearchBar /> {/* Render the SearchBar component */}
        <Cards /> {/* Render the Cards component */}
      </section>
    </>
  );
}
