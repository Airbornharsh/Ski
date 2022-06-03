import React from "react";
import CategoryFilter from "./CategoryFilter";
import SubCategoryFilter from "./SubCategoryFilter";

const Filter = () => {
  return (
    <div id="filter-container" className="filter">
      <CategoryFilter />
      <SubCategoryFilter />
    </div>
  );
};

export default Filter;
