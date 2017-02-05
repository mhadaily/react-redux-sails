import { expect } from 'chai';
import { describe, it } from 'mocha';

import * as ActionCreators from './caseSavingActions';
import * as ActionTypes from '../constants/actionTypes';

import initialStates from '../reducers/initialState';
import * as FuneralTypes from '../constants/FuneralTypes'

describe('Actions', () => {

  it('should create an action to save customer details', () => {
    const expected = {
      type: ActionTypes.SAVE_CUSTOMER_DETAIL,
      customerOBJ: initialStates
    };
    expect(ActionCreators.saveCustomerDetail(initialStates)).to.deep.equal(expected);
  });

  it('should create an action to save deceased details', () => {
    const expected = {
      type: ActionTypes.SAVE_DECEASED_DETAIL,
      DeceasedOBJ: initialStates
    };
    expect(ActionCreators.saveDeceasedDetail(initialStates)).to.deep.equal(expected);
  });

  it('should create an action to save funeral types', () => {
    const fieldName = initialStates.funeral.type;
    const value = FuneralTypes.BURIAL;

    const expected = {
      type: ActionTypes.SAVE_FUNERAL,
      funeralOBJ: initialStates,
      fieldName,
      value
    };

    expect(ActionCreators.saveFuneral(initialStates, fieldName, value)).to.deep.equal(expected);
  });
});
