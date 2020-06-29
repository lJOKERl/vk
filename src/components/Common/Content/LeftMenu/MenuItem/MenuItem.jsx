import React from "react";
import classes from './MenuItem.module.css';
import { NavLink } from "react-router-dom";


const MenuItem = (props) => {

  return (
    <li className={classes.MenuItem}>
      <NavLink to={props.url}>{props.icon}{props.text}</NavLink>
    </li>
  );
}

export default MenuItem;