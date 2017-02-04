import initialState from './initialState';
import objectAssign from 'object-assign';
import { SAVE_DECEASED_DETAIL, SAVE_CUSTOMER_DETAIL, SAVE_FUNERAL } from '../constants/actionTypes';


// IMPORTANT: Note that with Redux, state should NEVER be changed.
// State is considered immutable. Instead,
// create a copy of the state passed and set new values on the copy.
// Note that I'm using Object.assign to create a copy of current state
// and update values on the copy.
function caseCustomer(state = initialState, action) {
  let customer;
  let deceased;
  let funeral;

  switch (action.type) {
    case SAVE_FUNERAL:

      funeral = objectAssign({}, state.funeral);
      funeral[action.fieldName] = action.value;

      return funeral;

    case SAVE_DECEASED_DETAIL:

      deceased = objectAssign({}, state.deceased);
      deceased[action.fieldName] = action.value;

      return deceased;


    case SAVE_CUSTOMER_DETAIL:

      customer = objectAssign({}, state.customer);
      customer[action.fieldName] = action.value;

      return customer;

    default:
      return state;
  }
}
export default caseCustomer;
