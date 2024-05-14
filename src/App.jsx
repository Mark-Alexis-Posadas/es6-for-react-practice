import { useState } from "react";

const initialArray = [
  { id: 1, name: "John", isAdmin: true },
  { id: 2, name: "Jane", isAdmin: false },
  { id: 3, name: "Doe", isAdmin: true },
];

const App = () => {
  const [filteredIsAdmin, setFilteredIsAdmin] = useState(initialArray);

  const [showAdmin, setShowAdmin] = useState(false);
  const handleClick = () => {
    setShowAdmin((prev) => !prev);
    if (!showAdmin) {
      setFilteredIsAdmin(initialArray.filter((arr) => arr.isAdmin !== false));
    } else {
      setFilteredIsAdmin(initialArray);
    }
  };

  return (
    <>
      <ul>
        {filteredIsAdmin.map((item, index) => (
          <li key={index}>
            {item.name} - {item.age}
          </li>
        ))}
      </ul>
      <button onClick={handleClick}>Filter Admin</button>
    </>
  );
};

export default App;
