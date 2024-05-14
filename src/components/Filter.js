import React from 'react';

const Filter = ({ selectedCategory, onCategoryChange }) => {
  return (
    <div>
      <label htmlFor="category-filter">Filter by category:</label>
      <select id="category-filter" value={selectedCategory} onChange={onCategoryChange}>
        <option value="all">All</option>
        <option value="category1">Category 1</option>
        <option value="category2">Category 2</option>
      </select>
    </div>
  );
};

export default Filter;