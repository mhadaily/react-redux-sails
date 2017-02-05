import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import caseInfo from './caseSavingReducer';

const rootReducer = combineReducers({
  routing: routerReducer,
  caseInfo
});

export default rootReducer;
