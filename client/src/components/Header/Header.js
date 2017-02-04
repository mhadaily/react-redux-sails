import React from 'react';
import { Link, IndexLink } from 'react-router';
import { AppBar, FontIcon } from 'react-toolbox';

const MainHeader = () => {
  return (
    <AppBar>
      <IndexLink to="/"><FontIcon value="home"/></IndexLink>
      <Link to="/case/1"><FontIcon value="account_circle"/></Link>
      <Link to="/About"><FontIcon value="info"/></Link>
    </AppBar>
  );
};

export default MainHeader;
