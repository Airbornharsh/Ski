import React from "react";

const CategoryFilter = (props) => {
  const categoryChange = (event) => {
    props.onFiltering(event.target.value);
  };

  return (
    <div className="category-container">
      <select onChange={categoryChange} placeholder="NONE">
        <option value="all">ALL</option>
        <option value="design">DESIGN</option>
        <option value="development">DEVELOPMENT</option>
        <option value="art">ART</option>
      </select>
    </div>
  );
};

export default CategoryFilter;
