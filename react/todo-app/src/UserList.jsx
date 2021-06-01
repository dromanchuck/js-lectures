import { useEffect, useState, memo } from "react";

export const UserList = memo(() => {
  const [users, setUsers] = useState([]);

  useEffect(async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/photos");
    const usersResponse = await response.json();

    setUsers(usersResponse);
  }, []);

  return (
    <ol>
      {users.map((item) => (
        <Img urlec={item.url} />
      ))}
    </ol>
  );
});

const Img = ({ urlec }) => {
  const [isBig, setIsBig] = useState(false);

  const onClickImage = () => {
    setIsBig(!isBig);
  };

  return (
    <img
      onClick={onClickImage}
      style={{
        width: isBig ? "500px" : "100px",
        height: isBig ? "500px" : "100px",
        transition: "all 0.3s linear",
      }}
      src={urlec}
    />
  );
};
