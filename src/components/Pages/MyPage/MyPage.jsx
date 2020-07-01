import React from "react";
import classes from "./MyPage.module.css";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import AddPostContainer from "./MyPosts/AddPost/AddPostContainer";

const MyPage = props => {
  
  
  return (
    <>
      <div className={classes.MyPage}>
        <h3>Евгений Белоконь</h3>
      </div>
      <AddPostContainer store={props.store} />
      <MyPostsContainer store={props.store} />
    </>
  );
};

export default MyPage;
