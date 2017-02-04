import { expect } from 'chai';
import * as ActionTypes from '../constants/actionTypes';
import reducer from './caseSavingReducer';
import initialState from './initialState';
import * as FuneralTypes from '../constants/FuneralTypes';
import { describe, it } from 'mocha';

describe('Reducers::caseSavingReducer', () => {

  it('should set initial state by default', () => {
    const action = {type: 'unknown'};
    const expected = initialState;

    expect(reducer(undefined, action)).to.deep.equal(expected);
  });

  it('should handle SAVE_FUNERAL', () => {
    const action = {type: ActionTypes.SAVE_FUNERAL, settings: initialState, fieldName: 'type', value: FuneralTypes.BURIAL};

    const expectedType = FuneralTypes.BURIAL;
    const expectedSavings = {type: FuneralTypes.BURIAL};

    expect(reducer(initialState, action).type).to.equal(expectedType);
    expect(reducer(initialState, action)).to.deep.equal(expectedSavings);
  });

  it('should handle SAVE_CUSTOMER_DETAIL', () => {
    const action = {type: ActionTypes.SAVE_CUSTOMER_DETAIL, settings: initialState, fieldName: 'name', value: 'Majid'};

    const expectedName = 'Majid';
    const expectedSavings = {name: 'Majid', phone: '', contactWay: '', timeToCall: ''};

    expect(reducer(initialState, action).name).to.equal(expectedName);
    expect(reducer(initialState, action)).to.deep.equal(expectedSavings);
  });

  it('should handle SAVE_DECEASED_DETAIL', () => {
    const action = {type: ActionTypes.SAVE_DECEASED_DETAIL, settings: initialState, fieldName: 'surname', value: 'Hajian'};

    const expectedSurname= 'Hajian';
    const expectedSavings = { name: '',
      surname: 'Hajian',
      address: {
        line1: '',
        city: '',
        postcode: null,
        country: ''
      },
      dob: null,
      martialStatus: '',};

    expect(reducer(initialState, action).surname).to.equal(expectedSurname);
    expect(reducer(initialState, action)).to.deep.equal(expectedSavings);
  });
});
