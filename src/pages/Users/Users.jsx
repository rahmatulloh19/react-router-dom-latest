import axios from "axios";
import { useLoaderData } from "react-router-dom";

export const Users = () => {
  const data = useLoaderData();

  return (
    <div>
      Users
      <ul>
        {data.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
};

export const userLoader = async () => {
  const { data } = await axios("https://jsonadaplaceholder.typicode.com/users");

  return data;
};
