import { useState } from "react";

export default function FilterEvenNumbers() {
  const initialArray = [1, 2, 3, 4, 5];
  const [filteredArray, setFilteredArray] = useState(initialArray);
  const [showEven, setShowEven] = useState(false);

  const handleClick = () => {
    setShowEven((prevShowEven) => !prevShowEven);

    if (!showEven) {
      setFilteredArray(initialArray.filter((num) => num % 2 === 0));
    } else {
      setFilteredArray(initialArray);
    }
  };

  return (
    <div>
      <ul>
        {filteredArray.map((array, index) => (
          <li key={index}>{array}</li>
        ))}
      </ul>

      <button onClick={handleClick}>Toggle Even Numbers</button>
    </div>
  );
}
