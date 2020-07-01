import React from "react";
import classes from './AddPost.module.css';
import TextField from '@material-ui/core/TextField';
import SendIcon from '@material-ui/icons/Send';
import { sendPostActionCreator } from '../../../../../redux/postReducer'


const AddPost = props => {
  // debugger;
  let postElements = React.createRef();
  let sendPost = () => {
  
  let text = postElements.current.value;

  if(text) {
    props.dispatch(sendPostActionCreator(text))
  }

  postElements.current.value = "";
  }
  return (
    <AddPost/>
  )
};

export default AddPost; 