import { React, useState } from "react";

const Search = (props) => {
  const [input, setInput] = useState("");

  const inputChanged = (event) => {
    setInput(event.target.value);
    props.onSearched(input);
  };

  return (
    <div id="search">
      <input
        id="search-input"
        placeholder="Search Here"
        value={input}
        onChange={inputChanged}
      />
      <button onClick={inputChanged} id="search-button">
        SEARCH
      </button>
    </div>
  );
};

export default Search;
