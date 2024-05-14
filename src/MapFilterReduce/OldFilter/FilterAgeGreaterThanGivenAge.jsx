import { useState } from "react";

const initialArray = [
  { id: 1, name: "John", age: 25 },
  { id: 2, name: "Jane", age: 30 },
  { id: 3, name: "Doe", age: 35 },
];

export default function FilterAgeGreaterThanGivenAge() {
  const givenNumber = 30;
  const [filterAgeGreaterThanGivenAge, setFilterAgeGreaterThanGivenAge] =
    useState(initialArray);
  const [showNum, setShowNum] = useState(false);

  const handleToggle = () => {
    setShowNum((prev) => !prev);
    if (!showNum) {
      setFilterAgeGreaterThanGivenAge(
        initialArray.filter((arr) => arr.age >= givenNumber)
      );
    } else {
      setFilterAgeGreaterThanGivenAge(initialArray);
    }
  };

  return (
    <>
      <ul>
        {filterAgeGreaterThanGivenAge.map((item) => (
          <li key={item.id}>
            {item.name} - {item.age}
          </li>
        ))}
      </ul>

      <button onClick={handleToggle}>Toggle</button>
    </>
  );
}
