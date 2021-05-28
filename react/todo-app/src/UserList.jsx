import { useEffect, useState, memo } from "react";

export const UserList = memo(() => {
  const [users, setUsers] = useState([]);

  useEffect(async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const usersResponse = await response.json();

    setUsers(usersResponse);
  }, []);

  return (
    <ol>
      {users.map((item) => (
        <li>{item.name}</li>
      ))}
    </ol>
  );
});
