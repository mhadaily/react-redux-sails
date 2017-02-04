import { expect } from 'chai';
import { describe, it } from 'mocha';

import * as ActionCreators from './caseSavingActions';
import * as ActionTypes from '../constants/actionTypes';

import initialStates from '../reducers/initialState';
import * as FuneralTypes from '../constants/FuneralTypes'

describe('Actions', () => {
  const testStats = initialStates;

  it('should create an action to save customer details', () => {
    const expected = {
      type: ActionTypes.SAVE_CUSTOMER_DETAIL,
      settings: testStats
    };
    expect(ActionCreators.saveCustomerDetail(testStats)).to.deep.equal(expected);
  });

  it('should create an action to save deceased details', () => {
    const expected = {
      type: ActionTypes.SAVE_DECEASED_DETAIL,
      settings: testStats
    };
    expect(ActionCreators.saveDeceasedDetail(testStats)).to.deep.equal(expected);
  });

  it('should create an action to save funeral types', () => {
    const fieldName = initialStates.funeral.type;
    const value = FuneralTypes.BURIAL;

    const expected = {
      type: ActionTypes.SAVE_FUNERAL,
      settings: testStats,
      fieldName,
      value
    };

    expect(ActionCreators.saveFuneral(testStats, fieldName, value)).to.deep.equal(expected);
  });
});
