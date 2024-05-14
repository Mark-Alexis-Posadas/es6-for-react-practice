import { useState } from "react";

const users = [
  { id: 1, name: "John" },
  { id: 2, name: "Jane" },
  { id: 3, name: "Doe" },
];

export default function FilterGreaterThanOne() {
  const [filteredUsers, setFilteredUsers] = useState(users);
  const usersWithIdGreaterThanOne = users.filter((user) => user.id > 1);

  const handleFilterClick = () => {
    setFilteredUsers(usersWithIdGreaterThanOne);
  };

  return (
    <>
      <ul>
        {filteredUsers.map((user) => (
          <li key={user.id}>
            {user.name} - {user.id}
          </li>
        ))}
      </ul>
      <button onClick={handleFilterClick}>Toggle ID Greater Than One</button>
    </>
  );
}
