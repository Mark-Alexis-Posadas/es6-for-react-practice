import { useState } from "react";

export default function FilterEvenNumbers() {
  const numbers = [1, 2, 3, 4, 5];
  const [filteredNumbers, setFilteredNumbers] = useState(numbers);
  const [showEven, setShowEven] = useState(false);

  const handleToggleEvenNumbers = () => {
    setShowEven((prevShowEven) => !prevShowEven);

    if (!showEven) {
      setFilteredNumbers(numbers.filter((num) => num % 2 === 0));
    } else {
      setFilteredNumbers(numbers);
    }
  };

  return (
    <div>
      <ul>
        {filteredNumbers.map((number, index) => (
          <li key={index}>{number}</li>
        ))}
      </ul>

      <button onClick={handleToggleEvenNumbers}>Toggle Even Numbers</button>
    </div>
  );
}
