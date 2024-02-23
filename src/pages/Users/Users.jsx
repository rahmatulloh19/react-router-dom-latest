import axios from "axios";
import { useLoaderData, useNavigate } from "react-router-dom";

export const Users = () => {
  const data = useLoaderData();
  const navigate = useNavigate();

  return (
    <div>
      Users
      <ul>
        {data.map((user) => (
          <li
            key={user.id}
            style={{ paddingBlock: "10px", cursor: "pointer" }}
            onClick={() => {
              navigate(`/users/${user.id}`);
            }}
          >
            {user.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export const userLoader = async () => {
  const { data } = await axios("https://jsonplaceholder.typicode.com/users");
  // const user = await axios(`https://jsonplaceholder.typicode.com/users?id=${user.id}`);

  return data;
};
