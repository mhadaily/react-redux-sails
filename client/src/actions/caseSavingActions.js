import * as types from '../constants/actionTypes';

export function saveCustomerDetail(settings) {
  return {
    type: types.SAVE_CUSTOMER_DETAIL,
    settings
  };
}

export function saveDeceasedDetail(settings) {
  return {
    type: types.SAVE_DECEASED_DETAIL,
    settings
  };
}

export function saveFuneral(settings, fieldName, value) {
  return {
    type: types.SAVE_FUNERAL,
    settings,
    fieldName,
    value
  };
}
