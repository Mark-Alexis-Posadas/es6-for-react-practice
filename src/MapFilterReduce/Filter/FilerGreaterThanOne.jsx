import { useState } from "react";

const initialArray = [
  { id: 1, name: "John" },
  { id: 2, name: "Jane" },
  { id: 3, name: "Doe" },
];

export default function FilerGreaterThanOne() {
  const [filteredId, setFilteredId] = useState(initialArray);
  const filteredOutput = initialArray.filter((arr) => arr.id > 1);

  const handleClick = () => {
    setFilteredId(filteredOutput);
  };
  return (
    <>
      <ul>
        {filteredId.map((item, index) => (
          <li key={index}>
            {item.name} - {item.id}
          </li>
        ))}
      </ul>
      <button onClick={handleClick}>toggle id greater than on</button>
    </>
  );
}
