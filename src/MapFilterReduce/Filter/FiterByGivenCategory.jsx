import { useState } from "react";
const initialArray = [
  { id: 1, name: "John", category: "A" },
  { id: 2, name: "Jane", category: "B" },
  { id: 3, name: "Doe", category: "A" },
];

export default function FilterByGivenCategory() {
  const [filterByGivenCategory, setFilterByGivenCategory] =
    useState(initialArray);
  const [showNum, setShowNum] = useState(false);

  const handleToggle = () => {
    setShowNum((prev) => !prev);
    if (!showNum) {
      setFilterByGivenCategory(
        initialArray.filter((arr) => arr.category === "A")
      );
    } else {
      setFilterByGivenCategory(initialArray);
    }
  };

  return (
    <>
      <ul>
        {filterByGivenCategory.map((item) => (
          <li key={item.id}>
            {item.id} - {item.name} {item.category}
          </li>
        ))}
      </ul>

      <button onClick={handleToggle}>Toggle</button>
    </>
  );
}
