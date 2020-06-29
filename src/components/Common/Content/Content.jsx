import React from "react";
import './Content.css';
import LeftMenu from "./LeftMenu/LeftMenu";
import Main from "./Main/Main";
import RightMenu from "./RightMenu/RightMenu";
import { BrowserRouter } from "react-router-dom";

const Content = props => {
  return (
    <BrowserRouter>
      <div className="main_content">
        <LeftMenu />
        <Main state={props.state} dispatch={props.dispatch} />
        <RightMenu />
      </div>
    </BrowserRouter>
  );
}

export default Content;