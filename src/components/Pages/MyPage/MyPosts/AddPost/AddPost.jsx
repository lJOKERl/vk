import React from "react";
import classes from './AddPost.module.css';
import TextField from '@material-ui/core/TextField';
import SendIcon from '@material-ui/icons/Send';

const AddPost = props => {
  console.log(props);
  
  return (
  
    <div className={classes.AddPost}>
      <img
          src="https://sun9-27.userapi.com/c638320/v638320687/17afd/6RttIh95FCo.jpg?ava=1"
          alt=""
        />
      <TextField
            id="standard-multiline-flexible"
            fullWidth
            placeholder="Что у вас нового?"
            multiline
            inputRef={props.postElements}
            
          />
          {/* <textarea ref={postElements}  name="" id="" cols="30" rows="10"></textarea> */}
      <SendIcon onClick={props.sendPost} />
    </div>
  )
};

export default AddPost; 