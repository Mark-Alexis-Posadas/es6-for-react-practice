// Filtered array with objects having an age less than 30.
import { useState } from "react";

const initialArray = [
  { id: 1, name: "John", age: 25 },
  { id: 2, name: "Jane", age: 30 },
  { id: 3, name: "Doe", age: 35 },
];

export default function FilterAgeLess() {
  const [filteredAge, setFilteredAge] = useState(initialArray);
  const filteredOutput = initialArray.filter((arr) => arr.age < 30);

  const handleClick = () => {
    setFilteredAge(filteredOutput);
  };
  return (
    <>
      <ul>
        {filteredAge.map((item, index) => (
          <li key={index}>
            {item.name} - {item.age}
          </li>
        ))}
      </ul>
      <button onClick={handleClick}>toggle age less than 30</button>
    </>
  );
}
