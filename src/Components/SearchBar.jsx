// SearchBar component
// This component is responsible for handling the search functionality in the app.

import React, { useRef } from "react";
import "../styles/main.scss";
import { useGlobalContext } from "./ContextAPI";

// This component imports the useGlobalContext hook to access the setSearch function
// defined in the ContextAPI component.

export default function SearchBar() {
  const { setSearch } = useGlobalContext();
  // Creating a ref to access the input value
  const searchValue = useRef("");

  // Setting focus on the input field when component loads
  React.useEffect(() => {
    searchValue.current.focus();
  }, []);

  // function to set the search value whenever the input changes
  const searchTerm = () => {
    setSearch(searchValue.current.value);
  };
  // function to prevent the form from submitting when the search button is pressed
  const submitQuery = (e) => {
    e.preventDefault();
  };

  // Rendering the search bar with a form containing an input field
  return (
    <div className="SearchBar">
      <div className="Wrapper">
        <form className="Form" onSubmit={submitQuery}>
          <input
            className="Input"
            placeholder="Search Cocktail..."
            type="text"
            ref={searchValue}
            onChange={searchTerm}
          />
        </form>
      </div>
    </div>
  );
}
