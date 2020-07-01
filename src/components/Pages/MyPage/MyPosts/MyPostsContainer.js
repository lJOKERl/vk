// import React from "react";
import MyPosts from "./MyPosts";
import { connect } from "react-redux";

const mapStateToProps = (store) => {
  return {
    posts: store.posts
  }
}

const MyPostsContainer = connect( mapStateToProps)(MyPosts);

export default MyPostsContainer; 