import React, { useRef } from "react";
import "../styles/main.scss";
import { useGlobalContext } from "../ContextAPI";

const SearchBar = () => {
  const { setSearch } = useGlobalContext();

  const searchValue = useRef("");

  React.useEffect(() => {
    searchValue.current.focus();
  }, []);

  const searchTerm = () => {
    setSearch(searchValue.current.value);
  };
  const submitQuery = (e) => {
    e.preventDefault();
  };
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
};

export default SearchBar;
