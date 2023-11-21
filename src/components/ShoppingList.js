import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";

function ShoppingList({ items, setItems }) {
  const [searchItem, setSearchItem] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }

  function handleSearchChange(newSearchItem){
    setSearchItem(newSearchItem)
  }

  function handleItemFormSubmit(newItem){
    setItems((prevItems) => [...prevItems, newItem]);
  }

  const itemsToDisplay = items.filter((item) => {
    const isCategoryMatch =
      selectedCategory === "All" || item.category === selectedCategory;
    const isSearchMatch = item.name.toLowerCase().includes(searchItem.toLocaleLowerCase());

    return isCategoryMatch && isSearchMatch;
  });

  return (
    <div className="ShoppingList">
      <ItemForm onItemFormSubmit={handleItemFormSubmit} />
      <Filter
        onSearchChange={handleSearchChange}
        onCategoryChange={handleCategoryChange}
      />
      <ul className="Items">
        {itemsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
