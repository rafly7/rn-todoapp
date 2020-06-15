export default (state = false, action) => {
  switch (action.type) {
    case 'IS_SHOW':
      return !state;
    default:
      return state;
  }
};
