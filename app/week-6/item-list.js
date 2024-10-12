"use client";
import Item from './item.js';
import { useState } from 'react';
import itemsJson from './items.json';
import react from 'react';

export default function ItemList() {
  const [sortBy, setSortBy] = useState('name');
  let items = [...itemsJson];

  if (sortBy == 'name') {
    items.sort((a, b) => a.name.localeCompare(b.name));
  }
  else if (sortBy == 'category') {
    items.sort((a, b) => a.category.localeCompare(b.category));
  }

  const handleSortByName = () => {
    setSortBy('name');
  };

  const handleSortByCategory = () => {
    setSortBy('category');
  };

  //const itemsByCategory = items.reduce(() => );

  return (
    <main>
      <span className="text-neutral-100 flex gap-4 my-4 mx-2"><p>Sort by: </p>
        <button
          className={`${sortBy == 'name' ? 'bg-blue-400' : 'bg-blue-600'} hover:bg-blue-700 text-white font-bold py-2 px-4 rounded`}
          onClick={handleSortByName}
        >Name
        </button>
        <button
          className={`${sortBy == 'category' ? 'bg-blue-400' : 'bg-blue-600'} hover:bg-blue-700 text-white font-bold py-2 px-4 rounded`}
          onClick={handleSortByCategory}
        >Category
        </button>
        <button
          className={`${sortBy == 'nameg' ? 'bg-blue-400' : 'bg-blue-600'} hover:bg-blue-700 text-white font-bold py-2 px-4 rounded`}
        >Grouped Category
        </button>

      </span>
      {items.map((item) => {
        return (
          <Item
            key={item.id}
            name={item.name}
            quantity={item.quantity}
            category={item.category}
          />
        );
      })}
    </main>
  );
}