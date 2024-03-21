import React from "react";
import PostCard from "../postCard";
import { PostProps } from "@/types/postProps";


async function getData() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  if (!res.ok) {
    throw new Error("Error, failed to fetch data");
  }
  console.log(res)
  return res.json();
}

const PostList = async () => {
  const data = await getData();

  return (
    <div className="">
      {/* <PostCard title="Post Title" desc="Post descriptions" /> */}

      {data.map((post: PostProps) => (
        <PostCard key={post.id} {...post}/>
      ))}
    </div>
  );
};

export default PostList;
