import { useState } from "react";

const USERS = [
  { id: 1, name: "Alice Johnson", email: "alice@example.com" },
  { id: 2, name: "Bob Smith", email: "bob@example.com" },
  { id: 3, name: "Charlie Brown", email: "charlie@example.com" },
  { id: 4, name: "Diana Prince", email: "diana@example.com" },
  { id: 5, name: "Eve Wilson", email: "eve@example.com" },
];

const SearchUsers = () => {
  const [searchText, setSearchText] = useState("");

  const filteredUsers = USERS.filter((user) => {
    const search = searchText.trim().toLowerCase();
    const name = user.name.toLowerCase();
    const email = user.email.toLowerCase();
    return name.includes(search) || email.includes(search);
  });

  return (
    <>
      <input
        type="text"
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
      />
      {filteredUsers.map((user) => (
        <div key={user.id}>
          <h2>{user.name}</h2>
          <p>{user.email}</p>
        </div>
      ))}
      <p>Found {filteredUsers.length} users</p>
    </>
  );
};

export default SearchUsers;
