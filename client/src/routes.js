import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/App';
import HomePage from './components/homepage';
import FuneralForm from './components/case/funeral';
import CusteromForm from './components/case/customer';
import DeceasedForm from './components/case/deceased';
import CaseContainer from './containers/CasePage';
import NotFoundPage from './components/notFound/NotFound';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={HomePage}/>
    <Route path="/case" component={CaseContainer}>
      <IndexRoute component={CusteromForm}/>
      <Route path="/case/deceased" component={DeceasedForm}/>
      <Route path="/case/funeral" component={FuneralForm}/>
    </Route>

    <Route path="*" component={NotFoundPage}/>
  </Route>
);
