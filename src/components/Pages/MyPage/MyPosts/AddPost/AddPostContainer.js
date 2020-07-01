import React from "react";
import { sendPostActionCreator } from '../../../../../redux/postReducer'
import { connect } from "react-redux";
import AddPost from './AddPost'


let postElements = React.createRef();

const mapStateToProps = (store) => {
    return {
      state: store,
      postElements
    }
}

const mapDispatchToProps = (dispatch) => {
  return {
    sendPost() {
      let text = postElements.current.value;

      if(text) {
        dispatch(sendPostActionCreator(text))
      }
    
      postElements.current.value = "";
    }
  }
}

const AddPostContainer = connect(mapStateToProps, mapDispatchToProps )(AddPost);

export default AddPostContainer; 