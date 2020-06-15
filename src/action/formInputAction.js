import {name_input, address_input} from '../utils/constType';

export const handleNameInput = val => {
  return {
    type: name_input,
    payload: val,
  };
};

export const handleAddressInput = val => {
  return {
    type: address_input,
    payload: val,
  };
};
