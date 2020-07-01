import React from "react";
import MyPosts from "./MyPosts";

const MyPostsContainer = props => {
  let state = props.store.getState();

  return (
    <MyPosts state={state} />
  )
};

export default MyPostsContainer; 