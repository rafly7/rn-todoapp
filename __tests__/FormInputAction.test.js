import {name_input, address_input} from '../src/utils/constType';
import {handleNameInput, handleAddressInput} from '../src/action/index';

describe('FormInput action', () => {
  it('handleNameInput should return new action if receiving input', () => {
    const name = 'Hello';
    const expectedAction = {
      type: name_input,
      payload: name,
    };
    expect(handleNameInput(name)).toEqual(expectedAction);
  });

  it('handleAddressInput should return new action if receiving input', () => {
    const address = 'bip';
    const expectedAction = {
      type: address_input,
      payload: address,
    };
    expect(handleAddressInput(address)).toEqual(expectedAction);
  });
});
