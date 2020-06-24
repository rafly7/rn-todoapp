import {
  title_input,
  note_input,
  date_input,
  time_input,
  clear_input,
} from '../utils/constType';

const initialstate = {
  title: '',
  note: '',
  date: new Date(),
  time: new Date(),
};

export default (state = initialstate, action) => {
  switch (action.type) {
    case title_input:
      return {
        ...state,
        title: action.payload,
      };
    case note_input:
      return {
        ...state,
        note: action.payload,
      };
    case date_input:
      return {
        ...state,
        date: action.payload,
      };
    case time_input:
      return {
        ...state,
        time: action.payload,
      };
    case clear_input:
      return {
        ...state,
        title: '',
        note: '',
      };
    default:
      return state;
  }
};
