import {add_data, delete_data} from '../utils/constType';

export const addData = (id, title, note, date, time) => {
  return {
    type: add_data,
    payload_id: id,
    payload_title: title,
    payload_note: note,
    payload_date: date,
    payload_time: time,
  };
};

export const deleteData = key => {
  return {
    type: delete_data,
    key: key,
  };
};
