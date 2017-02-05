import React from 'react';
import { Link } from 'react-router';

import { List, ListItem, ListDivider } from 'react-toolbox';
import style from "./menu.scss";

const Menu = () => {
  return (
    <List ripple>
      <Link className={style.noUnderline} to="/"><ListItem caption="Home" leftIcon="home"/></Link>
      <Link className={style.noUnderline} to="/search"><ListItem caption="Search" leftIcon="search"/></Link>
      <ListDivider />
      <Link className={style.noUnderline} to="/case"> <ListItem caption="Open A Case" leftIcon="send"/></Link>
    </List>
  );
};

export default Menu;
