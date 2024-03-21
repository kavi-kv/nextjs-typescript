import { PostProps } from "@/types/postProps";
import React from "react";

const PostCard = (props: PostProps) => {
  return (
    <>
      <h1>{props.title}</h1> <br />
      <p>{props.body}</p>
    </>
  );
};

export default PostCard;
