import React from "react";
import classes from "./MyPage.module.css";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import AddPost from "./MyPosts/AddPost/AddPost";

const MyPage = props => {

  return (
    <>
      <div className={classes.MyPage}>
        <h3>Евгений Белоконь</h3>
      </div>
      <AddPost state={props.state} dispatch={props.dispatch}/>
      <MyPostsContainer store={props.store} />
    </>
  );
};

export default MyPage;
