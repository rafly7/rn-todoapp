import {add_data, delete_data} from '../utils/constType';

export const addData = (name, address) => {
  return {
    type: add_data,
    payload_name: name,
    payload_address: address,
  };
};

export const deleteData = index => {
  return {
    type: delete_data,
    index: index,
  };
};
