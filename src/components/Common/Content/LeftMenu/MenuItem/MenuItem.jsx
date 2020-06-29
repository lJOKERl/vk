import React from "react";
import './style.css';
import { NavLink } from "react-router-dom";


const MenuItem = (props) => {

  return (
    <li className="menu_item">
      <NavLink to={props.url}>{props.icon}{props.text}</NavLink>
    </li>
  );
}

export default MenuItem;