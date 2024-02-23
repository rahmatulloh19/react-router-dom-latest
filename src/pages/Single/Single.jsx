import axios from "axios";
import { useLoaderData } from "react-router-dom";

export const Single = () => {
  const data = useLoaderData();

  return (
    <>
      <h3>Single</h3>
      <ul>
        {data.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </>
  );
};

export const SingleLoader = async ({ params }) => {
  console.log(params);
  const { data } = await axios(`https://jsonplaceholder.typicode.com/posts?userId=${params.userId}`);
  console.log(data);
  return data;
};
