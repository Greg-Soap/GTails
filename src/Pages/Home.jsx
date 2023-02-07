import React from "react";
import SearchBar from "../Components/SearchBar";
import Cards from "../Components/Cards";
import "./styles/main.scss";

export default function Home() {
  return (
    <>
      <section className="App">
        <SearchBar />
        <Cards />
      </section>
    </>
  );
}
