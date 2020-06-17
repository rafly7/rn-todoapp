import {add_data, delete_data} from '../src/utils/constType';
import {addData, deleteData} from '../src/action/DataAction';

describe('Data action', () => {
  it('Add Data Action Should return new action if receiving parameter', () => {
    const name = 'hello',
      address = 'bogor';
    const newAction = {
      type: add_data,
      payload_name: name,
      payload_address: address,
    };
    expect(addData(name, address)).toEqual(newAction);
  });

  it('Delete Data Action Should return new action if receiving parameter', () => {
    const index = 0;
    const newAction = {
      type: delete_data,
      index: index,
    };
    expect(deleteData(index)).toEqual(newAction);
  });
});
