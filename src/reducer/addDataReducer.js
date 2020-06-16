import {add_data, delete_data} from '../utils/constType';

export default (state = [], action) => {
  switch (action.type) {
    case add_data:
      if (action.payload_name !== '' && action.payload_address !== '') {
        return [
          ...state,
          {
            name: action.payload_name,
            address: action.payload_address,
          },
        ];
      }
      break;
    case delete_data:
      state.splice(action.index, 1);
      return [...state];
  }
  return state;
};
