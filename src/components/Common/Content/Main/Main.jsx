import React from "react";
import classes from './Main.module.css';
import Friends from "../../../Pages/Friends/Friends";
import Messages from "../../../Pages/Messages/Messages";
import {  Route } from "react-router-dom";
import News from "../../../Pages/News/News";
import MyPage from "../../../Pages/MyPage/MyPage";

const Main = props => {

  return (
    <div className={classes.Main}>
      <Route path="/messages" render={() => (<Messages/>)} />
      <Route path="/friends" render={() => (<Friends />)} />
      <Route path="/news" render={() => (<News/>)} />
      <Route path="/my-page" render={() => (<MyPage store={props.store} state={props.state} dispatch={props.dispatch}/>)} />
    </div>
  );
}

export default Main;