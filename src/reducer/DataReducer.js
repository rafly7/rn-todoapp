import {add_data, delete_data} from '../utils/constType';
import {FormatDate} from '../logic/Format';
const initialstate = [
  {
    title: 'Create Authentication',
    createdAt: '2020/06/22',
    key: '1ed4f4b0-b444-11ea-9cae-e92674e97a1b',
    note: 'Tt',
    reminderDate: '2020/06/30',
    reminderTime: '16:20',
  },
];
export default (state = initialstate, action) => {
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
      state.splice(action.index, 1);
      return [...state];
  }
  return state;
};
