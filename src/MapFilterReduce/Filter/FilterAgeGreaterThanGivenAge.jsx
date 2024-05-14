import { useState } from "react";

const users = [
  { id: 1, name: "John", age: 25 },
  { id: 2, name: "Jane", age: 30 },
  { id: 3, name: "Doe", age: 35 },
];

export default function FilterAgeGreaterThanGivenAge() {
  const givenAge = 30;
  const [filteredUsers, setFilteredUsers] = useState(users);
  const [showFiltered, setShowFiltered] = useState(false);

  const handleToggleFilter = () => {
    setShowFiltered((prev) => !prev);
    if (!showFiltered) {
      setFilteredUsers(users.filter((user) => user.age >= givenAge));
    } else {
      setFilteredUsers(users);
    }
  };

  return (
    <>
      <ul>
        {filteredUsers.map((user) => (
          <li key={user.id}>
            {user.name} - {user.age}
          </li>
        ))}
      </ul>

      <button onClick={handleToggleFilter}>Toggle</button>
    </>
  );
}
