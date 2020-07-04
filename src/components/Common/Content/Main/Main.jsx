import React from "react";
import classes from './Main.module.css';
import Friends from "../../../Pages/Friends/Friends";
import Messages from "../../../Pages/Messages/Messages";
import { Route } from "react-router-dom";
import News from "../../../Pages/News/News";
import MyPage from "../../../Pages/MyPage/MyPage";
import UsersContainer from "../../../Pages/Users/UsersContainer";

const Main = props => {

  return (
    <div className={classes.Main}>
      <Route path="/messages" render={() => (<Messages/>)} />
      <Route path="/friends" render={() => (<Friends />)} />
      <Route path="/news" render={() => (<News/>)} />
      <Route path="/my-page" render={() => (<MyPage/>)} />
      <Route path="/users" render={() => (<UsersContainer />)} />
    </div>
  );
}

export default Main;