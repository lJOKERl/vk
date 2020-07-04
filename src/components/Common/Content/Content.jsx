import React from "react";
import './Content.css';
import LeftMenu from "./LeftMenu/LeftMenu";
import Main from "./Main/Main";
import {BrowserRouter} from "react-router-dom";
// import RightMenu from "./RightMenu/RightMenu";


const Content = props => {
  return (
    <BrowserRouter>
      <div className="main_content">
        <LeftMenu />
        <Main state={props.state} store={props.store} dispatch={props.dispatch} />
        {/* <RightMenu /> */}
      </div>
    </BrowserRouter>
  );
}

export default Content;