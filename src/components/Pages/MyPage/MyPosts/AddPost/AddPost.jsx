import React from "react";
import classes from './AddPost.module.css';
import TextField from '@material-ui/core/TextField';
import SendIcon from '@material-ui/icons/Send';
import { sendPostActionCreator } from '../../../../../redux/postReducer'


const AddPost = props => {
  // debugger;
  console.log(props.state)
  let postElements = React.createRef();
  let sendPost = () => {
  
    let text = postElements.current.value;
    console.log(props.state)
    if(text) {
      console.log(props.state)
  
      props.dispatch(sendPostActionCreator(text))
    }
    postElements.current.value = "";
  }
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
            inputRef={postElements}
            
          />
          {/* <textarea ref={postElements}  name="" id="" cols="30" rows="10"></textarea> */}
      <SendIcon onClick={sendPost} />
    </div>
  )
};

export default AddPost; 