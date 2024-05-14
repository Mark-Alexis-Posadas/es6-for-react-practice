import { useState } from "react";

const users = [
  { id: 1, name: "John", age: 25 },
  { id: 2, name: "Jane", age: 30 },
  { id: 3, name: "Doe", age: 35 },
];

export default function FilterAgeLess() {
  const [filteredUsers, setFilteredUsers] = useState(users);
  const usersWithAgeLessThan30 = users.filter((user) => user.age < 30);

  const handleFilterClick = () => {
    setFilteredUsers(usersWithAgeLessThan30);
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
      <button onClick={handleFilterClick}>Toggle age less than 30</button>
    </>
  );
}
