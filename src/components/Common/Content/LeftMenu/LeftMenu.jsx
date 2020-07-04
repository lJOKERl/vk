import React from "react";
import classes from "./LeftMenu.module.css";
import MenuItem from "./MenuItem/MenuItem";
import HomeIcon from '@material-ui/icons/Home';
import DescriptionIcon from '@material-ui/icons/Description';
import TextsmsIcon from '@material-ui/icons/Textsms';
import PeopleAltIcon from '@material-ui/icons/PeopleAlt';
import GroupAddIcon from '@material-ui/icons/GroupAdd';

const LeftMenu = () => {
  return (
    <nav className={classes.LeftMenu}>
      <ul>
        <MenuItem icon={<HomeIcon />} url="/my-page" text="Моя страница"  />
        <MenuItem icon={<DescriptionIcon />} url="/news" text="Новости" />
        <MenuItem icon={<TextsmsIcon />} url="/messages" text="Сообщения" />
        <MenuItem icon={<PeopleAltIcon />} url="/friends" text="Друзья" />
        <MenuItem icon={<GroupAddIcon />} url="/users" text="Пользователи" />
      </ul>
    </nav>
  );
};

export default LeftMenu;
