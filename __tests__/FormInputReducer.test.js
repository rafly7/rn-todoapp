import {name_input, address_input} from '../src/utils/constType';
import FormInputReducer from '../src/reducer/FormInputReducer';

describe('FormInput reducer', () => {
  it('Should return default state', () => {
    const state = {name: '', address: ''};
    const newState = FormInputReducer(undefined, {});
    expect(newState).toEqual(state);
  });

  it('Should return default state name and default state address', () => {
    const name = '',
      address = '';
    const newState = FormInputReducer(undefined, {});
    expect(newState.name).toEqual(name);
    expect(newState.address).toEqual(address);
  });

  it('State name Should return new state if receiving type', () => {
    const name = 'hello';
    const newState = FormInputReducer(undefined, {
      type: name_input,
      payload: name,
    });
    expect(newState.name).toEqual(name);
  });

  it('State address Should return new state if receiving type', () => {
    const address = 'bogor';
    const newState = FormInputReducer(undefined, {
      type: address_input,
      payload: address,
    });
    expect(newState.address).toEqual(address);
  });
});
