import { useEffect, useState } from "react";

import { UserCard, IUserCard } from "./UserCard";

export function UserList() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((users) => {
        setUsers(users);
      });
  }, []);

  return (
    <>
      {users.map((item: IUserCard) => {
        return <UserCard {...item} />;
      })}
    </>
  );
}
