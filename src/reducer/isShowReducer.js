import {is_show} from '../utils/constType';

export default (state = false, action) => {
  switch (action.type) {
    case is_show:
      return !state;
    default:
      return state;
  }
};
