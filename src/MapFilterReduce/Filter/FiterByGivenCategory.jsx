import { useState } from "react";

const items = [
  { id: 1, name: "John", category: "A" },
  { id: 2, name: "Jane", category: "B" },
  { id: 3, name: "Doe", category: "A" },
];

export default function FilterByGivenCategory() {
  const [filteredItems, setFilteredItems] = useState(items);
  const [showFiltered, setShowFiltered] = useState(false);

  const handleToggle = () => {
    setShowFiltered((prev) => !prev);
    if (!showFiltered) {
      setFilteredItems(items.filter((item) => item.category === "A"));
    } else {
      setFilteredItems(items);
    }
  };

  return (
    <>
      <ul>
        {filteredItems.map((item) => (
          <li key={item.id}>
            {item.id} - {item.name} {item.category}
          </li>
        ))}
      </ul>

      <button onClick={handleToggle}>Toggle</button>
    </>
  );
}
