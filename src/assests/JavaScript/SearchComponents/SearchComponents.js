import React from "react";
import Search from "./Search";
import Filter from "./Filter";

import "./SearchComponents.css";

const SearchComponents = (props) => {
  const onSearched = (data) => {
    props.onSearched(data);
  };

  return (
    <div id="search-components">
      <Search onSearched={onSearched} />
      <Filter />
    </div>
  );
};

export default SearchComponents;
