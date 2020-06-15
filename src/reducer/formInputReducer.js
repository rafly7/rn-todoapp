import {address_input, name_input} from '../utils/constType';

const initialstate = {
  name: '',
  address: '',
};

export default (state = initialstate, action) => {
  switch (action.type) {
    case name_input:
      return {
        ...state,
        name: action.payload,
      };
    case address_input:
      return {
        ...state,
        address: action.payload,
      };
    default:
      return state;
  }
};
