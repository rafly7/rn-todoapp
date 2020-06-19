import {add_data, delete_data} from '../utils/constType';

export const addData = (id, name, address, date) => {
  return {
    type: add_data,
    payload_id: id,
    payload_name: name,
    payload_address: address,
    payload_date: date,
  };
};

export const deleteData = index => {
  return {
    type: delete_data,
    index: index,
  };
};
