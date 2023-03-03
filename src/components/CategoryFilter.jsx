import React from "react";

const CategoryFilter = ({ categories, handleFilterChange }) => {
  return (
    <div>
      <select onChange={(e) => handleFilterChange(e.target.value)}>
        <option value="">select a category</option>
        {categories.map((category) => {
          return (
            <option key={category} value={category}>
              {category}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default CategoryFilter;
