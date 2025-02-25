import React, { useState } from "react";

function Filter({ onCategoryChange, onSearchChange }) {
  const [search, setSearchItem] = useState("testing");

  function handleSearchChange(event) {
    const newSearchItem = event.target.value;
    setSearchItem(newSearchItem);
    onSearchChange(newSearchItem);
  }
  return (
    <div className="Filter">
      <input
        type="text"
        name="search"
        placeholder="Search..."
        value={search}
        onChange={handleSearchChange}
      />
      <select name="filter" onChange={onCategoryChange}>
        <option value="All">Filter by category</option>
        <option value="Produce">Produce</option>
        <option value="Dairy">Dairy</option>
        <option value="Dessert">Dessert</option>
      </select>
    </div>
  );
}

export default Filter;
