import React from "react";
import classes from "./Post.module.css";

const Post = props => {
 
  return (

    <div className={classes.Post}>
      <img src={props.avatar}
        alt=""
      />
      <div className={classes.text}>
        <pre>{props.text}</pre>
      </div>
    </div>

)
};

export default Post;
