import React, { useState } from "react";
import Menu from "./Menu";
import Categories from "./Categories";
import items from "./data";

const allCategories = ["all", ...new Set(items.map((item) => item.category))]; //add all to the array, than add(spread) the categories array, set() - only unique values, deletes 2 same values turns into one

function App() {
  const [menuItems, setMenuItems] = useState(items);
  const [categories, setCategories] = useState(allCategories);

  const filterItems = (category) => {
    if (category === "all") {
      setMenuItems(items);
    } else {
      const newItems = items.filter((item) => item.category === category); // if item.category maches category, return that item.category
      setMenuItems(newItems);
    }
  };

  return (
    <main>
      <section className="menu selection">
        <div className="title">
          <h2>our menu</h2>
        </div>
        <Categories categories={categories} filterItems={filterItems} />
        <Menu items={menuItems} />
      </section>
    </main>
  );
}

export default App;
