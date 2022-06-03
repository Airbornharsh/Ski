import React from "react";
import CategoryFilter from "./CategoryFilter";
import SubCategoryFilter from "./SubCategoryFilter";

const Filter = (props) => {

  const onFiltering = (data) => {
    props.onFiltering(data);
  };

  return (
    <div id="filter-container" className="filter">
      <CategoryFilter onFiltering={onFiltering}/>
      <SubCategoryFilter />
    </div>
  );
};

export default Filter;
