import axios from "axios";
import { Suspense } from "react";
import { Await, defer, useLoaderData } from "react-router-dom";

export const Single = () => {
  const dataPosts = useLoaderData();

  const { data: posts } = dataPosts;

  console.log(posts);

  return (
    <>
      <h3>Hello world</h3>
      <Suspense fallback={<h2>Loading data... </h2>}>
        <Await resolve={posts}>
          {(data) => (
            <ul>
              {data.map((post) => (
                <li style={{ paddingBlock: "10px" }} key={post.id}>
                  {post.title}
                </li>
              ))}
            </ul>
          )}
        </Await>
      </Suspense>
    </>
  );
};

const getData = async ({ userId }) => {
  const data = await axios(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`);

  // const { data: user } = await axios(`https://jsonplaceholder.typicode.com/users?id=${userId}`);

  return data.data;
};

export const SingleLoader = async ({ params }) => {
  // const data = await getData(params);

  return defer({ data: getData(params) });
};
