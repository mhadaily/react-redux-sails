import React from 'react';
import { Link, IndexLink } from 'react-router';
import { AppBar, FontIcon } from 'react-toolbox';
import theme from './header.scss';

const MainHeader = () => {
  return (
    <AppBar theme={theme}>
      {'MYMORIA'}
      <IndexLink to="/"><FontIcon value="home"/></IndexLink>
      <Link to="/case/"><FontIcon value="account_circle"/></Link>
      <Link to="/notFound"><FontIcon value="info"/></Link>
    </AppBar>
  );
};

export default MainHeader;
