import { useState } from "react";

const initialArray = [10, 20, 30, 40, 50];

export default function FilterNumberGreaterThanGivenNumber() {
  const givenNumber = 21;
  const [filterGreaterThanGivenNumber, setFilterGreaterThanGivenNumber] =
    useState(initialArray);
  const [showNum, setShowNum] = useState(false);

  const handleToggle = () => {
    setShowNum((prev) => !prev);
    if (!showNum) {
      setFilterGreaterThanGivenNumber(
        initialArray.filter((arr) => arr > givenNumber)
      );
    } else {
      setFilterGreaterThanGivenNumber(initialArray);
    }
  };

  return (
    <>
      <ul>
        {filterGreaterThanGivenNumber.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>

      <button onClick={handleToggle}>Toggle</button>
    </>
  );
}
