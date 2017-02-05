import * as types from '../constants/actionTypes';

export function saveCustomerDetail(customerOBJ) {
  return {
    type: types.SAVE_CUSTOMER_DETAIL,
    customerOBJ
  };
}

export function saveDeceasedDetail(DeceasedOBJ) {
  return {
    type: types.SAVE_DECEASED_DETAIL,
    DeceasedOBJ
  };
}

export function saveFuneral(funeralOBJ, fieldName, value) {
  return {
    type: types.SAVE_FUNERAL,
    funeralOBJ,
    fieldName,
    value
  };
}
