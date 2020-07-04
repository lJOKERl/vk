// import React from "react";
import MyPosts from "./MyPosts";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
  return {
    posts: state.posts
  }
}

const MyPostsContainer = connect( mapStateToProps)(MyPosts);

export default MyPostsContainer; 