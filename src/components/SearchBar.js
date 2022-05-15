import React from "react";

function SearchBar({ type, sortStockList, sortList, sortCategoryList }) {
  return (
    <div>
      <strong>Sort by:</strong>
      <label>
        <input
          type="radio"
          value="Alphabetically"
          name="sort"
          checked={sortList === 'Alphabetically'}
          onChange={sortStockList}
        />
        Alphabetically
      </label>
      <label>
        <input
          type="radio"
          value="Price"
          name="sort"
          checked={sortList === 'Price'}
          onChange={sortStockList}
        />
        Price
      </label>
      <br />
      <label>
        <strong>Filter:</strong>
        <select 
        type={type}
        onChange={sortCategoryList}>
          <option value="Tech">Tech</option>
          <option value="Sportswear">Sportswear</option>
          <option value="Finance">Finance</option>
        </select>
      </label>
    </div>
  );
}

export default SearchBar;
