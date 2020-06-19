import {address_input, name_input, date_input} from '../utils/constType';

const initialstate = {
  name: '',
  address: '',
  date: new Date(),
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
    case date_input:
      return {
        ...state,
        date: action.payload,
      };
    default:
      return state;
  }
};
