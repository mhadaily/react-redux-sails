import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/App';
import HomePage from './components/homepage/HomePage';
import NotFoundPage from './components/notFound/NotFound';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={HomePage}/>
    <Route path="/case/:id"/>
    <Route path="*" component={NotFoundPage}/>
  </Route>
);
