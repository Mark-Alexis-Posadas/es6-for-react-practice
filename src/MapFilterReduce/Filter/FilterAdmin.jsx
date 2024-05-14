import { useState } from "react";

const users = [
  { id: 1, name: "John", isAdmin: true },
  { id: 2, name: "Jane", isAdmin: false },
  { id: 3, name: "Doe", isAdmin: true },
];

export default function FilterAdmin() {
  const [filteredUsers, setFilteredUsers] = useState(users);
  const [showAdmin, setShowAdmin] = useState(false);

  const handleFilterClick = () => {
    setShowAdmin((prev) => !prev);
    if (!showAdmin) {
      setFilteredUsers(users.filter((user) => user.isAdmin));
    } else {
      setFilteredUsers(users);
    }
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
      <button onClick={handleFilterClick}>Filter Admin</button>
    </>
  );
}
