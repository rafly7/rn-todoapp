import {add_data, delete_data} from '../utils/constType';
import {FormatDate} from '../logic/Format';
// const initialstate = [
//   {
//     key: '1ed4f4b0-b444-11ea-9cae-e92674e97a1b',
//     createdAt: '2020/06/22',
//     title: 'Create Authentication',
//     note: 'Tt',
//     reminderDate: '2020/06/30',
//     reminderTime: '16:20',
//   },
// ];
export default (state = [], action) => {
  switch (action.type) {
    case add_data:
      if (action.payload_note !== '' && action.payload_title !== '') {
        return [
          ...state,
          {
            key: action.payload_id,
            title: action.payload_title,
            note: action.payload_note,
            createdAt: FormatDate(new Date()),
            reminderDate: action.payload_date,
            reminderTime: action.payload_time,
          },
        ];
      }
      break;
    case delete_data:
      state.splice(state.findIndex(item => item.key === action.key), 1);
      return [...state];
  }
  return state;
};
