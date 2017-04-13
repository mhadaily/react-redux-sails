//import React from 'react';
import App from './components/App';
import HomePage from './components/homepage';
import CaseContainer from './containers/CasePage';
import CustomerCaseContainer from './containers/case/customerContainer';
import DeceasedCaseContainer from './containers/case/deceasedContainer';
import FuneralCaseContainer from './containers/case/funeralContainer';
import SingleCaseComponent from './containers/case/singleContainer';
import NotFoundPage from './components/notFound/NotFound';
import SearchPageComponent from './components/search';

const routes = {
  path: '/',
  component: App,
  indexRoute: { component: HomePage },
  childRoutes: [
    {
      path: 'case',
      component: CaseContainer,
      indexRoute: { component: CustomerCaseContainer },
      childRoutes: [
        { path: 'deceased', component: DeceasedCaseContainer },
        { path: 'funeral', component: FuneralCaseContainer },
      ],
    },
    { path: 'case/:id', component: SingleCaseComponent },
    { path: 'search', component: SearchPageComponent },
    { path: '*', component: NotFoundPage },
  ],
};

export default routes;
