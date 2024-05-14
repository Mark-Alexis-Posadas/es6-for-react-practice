import { useState } from "react";

const numbers = [10, 20, 30, 40, 50];

export default function FilterNumberGreaterThanGivenNumber() {
  const givenNumber = 21;
  const [filteredNumbers, setFilteredNumbers] = useState(numbers);
  const [showFiltered, setShowFiltered] = useState(false);

  const handleToggleNumbers = () => {
    setShowFiltered((prev) => !prev);
    if (!showFiltered) {
      setFilteredNumbers(numbers.filter((number) => number > givenNumber));
    } else {
      setFilteredNumbers(numbers);
    }
  };

  return (
    <>
      <ul>
        {filteredNumbers.map((number, index) => (
          <li key={index}>{number}</li>
        ))}
      </ul>

      <button onClick={handleToggleNumbers}>Toggle</button>
    </>
  );
}
