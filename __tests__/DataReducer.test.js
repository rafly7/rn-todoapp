import {add_data, delete_data} from '../src/utils/constType';
import DataReducer from '../src/reducer/DataReducer';

describe('Data Reducer', () => {
  it('Should return default state', () => {
    const newState = DataReducer(undefined, {});
    expect(newState).toEqual([]);
  });

  it('Add Data Should return new state if receiving type', () => {
    const name = 'Dan',
      address = 'bip';
    const data = [{name: name, address: address}];
    const newState = DataReducer(undefined, {
      type: add_data,
      payload_name: name,
      payload_address: address,
    });
    expect(newState).toEqual(data);
  });

  it('Delete Data Should return new state if receiving type', () => {
    const index = 0;
    const emptyArr = [];
    const newState = DataReducer(undefined, {
      type: delete_data,
      index: index,
    });
    expect(newState).toEqual(emptyArr);
  });

  it('if one of Data empty string Should return default state', () => {
    const emptyArr = [];
    const name = 'Dan',
      address = '';
    const newState = DataReducer(undefined, {
      type: add_data,
      payload_name: name,
      payload_address: address,
    });
    expect(newState).toEqual(emptyArr);
  });
});
