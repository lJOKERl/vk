import React from "react";
import classes from './MyPosts.module.css'
import Post from "./Post/Post";

const MyPosts = props => {
  return (
    <div className={classes.MyPosts}>
      <ul className={classes.tabs}>
        <li>Мои записи</li>
      </ul>

      { props.posts.map((post, index) => (
        <Post key={index} avatar={post.avatar} text={post.text}/>
      )) }
      
    </div>
  )
};

export default MyPosts; 