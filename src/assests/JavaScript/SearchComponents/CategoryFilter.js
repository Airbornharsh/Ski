import React from "react";

const CategoryFilter = () => {
  return (
    <div className="category-container">
      <select>
        <option value="design">DESIGN</option>
        <option value="development">DEVELOPMENT</option>
        <option value="art">ART</option>
      </select>
    </div>
  );
};

export default CategoryFilter;
