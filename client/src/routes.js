import React from 'react';
import App from './components/App';
import HomePage from './components/homepage';
import FuneralForm from './components/case/funeral';
import CusteromForm from './components/case/customer';
import DeceasedForm from './components/case/deceased';
import CaseContainer from './containers/CasePage';
import NotFoundPage from './components/notFound/NotFound';

const routes = {
  path: '/',
  component: App,
  indexRoute: {component: HomePage},
  childRoutes: [
    {
      path: 'case',
      component: CaseContainer,
      indexRoute: {component: CusteromForm},
      childRoutes: [
        {path: 'deceased', component: DeceasedForm},
        {path: 'funeral', component: FuneralForm},
      ]
    },
    {path: '*', component: NotFoundPage},
  ]
};

export default routes;
