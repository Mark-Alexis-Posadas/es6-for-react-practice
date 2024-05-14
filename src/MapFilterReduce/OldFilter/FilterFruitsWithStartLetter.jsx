import { useState } from "react";

const initialArray = ["apple", "banana", "grape", "orange", "kiwi"];
export default function FilterFruitsWithStartLetter() {
  const [filteredFruits, setFilteredFruits] = useState(initialArray);
  const [showFruits, setShowFruits] = useState(false);

  const handleClick = () => {
    setShowFruits((prevFruit) => !prevFruit);
    if (!showFruits) {
      setFilteredFruits(initialArray.filter((arr) => arr.startsWith("a")));
    } else {
      setFilteredFruits(initialArray);
    }
  };

  return (
    <div>
      <ul>
        {filteredFruits.map((fruit, index) => (
          <li key={index}>{fruit}</li>
        ))}
      </ul>

      <button onClick={handleClick}>Filter fruits the contains letter A</button>
    </div>
  );
}
