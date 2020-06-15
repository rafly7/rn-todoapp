const initialstate = {
  name: '',
  address: '',
};

export default (state = initialstate, action) => {
  switch (action.type) {
    case 'NAME_INPUT':
      return {
        ...state,
        name: action.payload,
      };
    case 'ADDRESS_INPUT':
      return {
        ...state,
        address: action.payload,
      };
    default:
      return state;
  }
};
