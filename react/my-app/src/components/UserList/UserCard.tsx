export interface IUserCard {
  id: any;
  name: string;
  username: string;
  email: string;
  phone: string;
  website: string;
}

export function UserCard({ id, name, username, email, phone, website }: IUserCard) {
  return (
    <div style={{ border: "1px solid black" }}>
      <p>{name}</p>
      <p>{username}</p>
      <p>{email}</p>
      <p>{phone}</p>
      <p>{website}</p>
    </div>
  );
}
