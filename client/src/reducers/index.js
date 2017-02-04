import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import caseCustomer from './caseSavingReducer';

const rootReducer = combineReducers({
  routing: routerReducer,
  caseCustomer
});

export default rootReducer;
