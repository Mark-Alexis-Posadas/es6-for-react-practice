import { useState } from "react";

const initialArray = [
  { id: 1, name: "John", score: 80 },
  { id: 2, name: "Jane", score: 90 },
  { id: 3, name: "Doe", score: 85 },
];

export default function FilterByScore() {
  const givenNumber = 85;
  const [filterByScore, setFilterByScore] = useState(initialArray);
  const [showNum, setShowNum] = useState(false);

  const handleToggle = () => {
    setShowNum((prev) => !prev);
    if (!showNum) {
      setFilterByScore(initialArray.filter((arr) => arr.score >= givenNumber));
    } else {
      setFilterByScore(initialArray);
    }
  };

  return (
    <>
      <ul>
        {filterByScore.map((item) => (
          <li key={item.id}>
            {item.name} - {item.score}
          </li>
        ))}
      </ul>

      <button onClick={handleToggle}>Toggle</button>
    </>
  );
}
