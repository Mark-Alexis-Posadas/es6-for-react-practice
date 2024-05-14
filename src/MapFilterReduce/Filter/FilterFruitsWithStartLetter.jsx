import { useState } from "react";

const fruits = ["apple", "banana", "grape", "orange", "kiwi"];

export default function FilterFruitsWithStartLetter() {
  const [filteredFruits, setFilteredFruits] = useState(fruits);
  const [showFilteredFruits, setShowFilteredFruits] = useState(false);

  const handleToggleFruits = () => {
    setShowFilteredFruits((prevShowFilteredFruits) => !prevShowFilteredFruits);
    if (!showFilteredFruits) {
      setFilteredFruits(fruits.filter((fruit) => fruit.startsWith("a")));
    } else {
      setFilteredFruits(fruits);
    }
  };

  return (
    <div>
      <ul>
        {filteredFruits.map((fruit, index) => (
          <li key={index}>{fruit}</li>
        ))}
      </ul>

      <button onClick={handleToggleFruits}>
        Filter fruits that start with letter A
      </button>
    </div>
  );
}
