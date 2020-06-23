import React from 'react';
import {fireEvent, render} from '@testing-library/react-native';
import {connect, Provider} from 'react-redux';
import {createStore} from 'redux';
import RootReducer from '../src/store/RootStore';
import FormInput from '../src/components/FormInput';

function renderWithRedux(
  ui,
  {initialstate, store = createStore(RootReducer)} = {},
) {
  return {
    ...render(<Provider store={store}>{ui}</Provider>),
    store,
  };
}

it('FormInput name Can render with redux with defaults', () => {
  const name = 'xyz';
  const {getByTestId} = renderWithRedux(<FormInput />);
  fireEvent.changeText(getByTestId('name-input'), name);
  expect(getByTestId('name-input').props.value).toEqual(name);
});

it('FormInput address Can render with redux with defaults', () => {
  const address = 'zxy';
  const {getByTestId} = renderWithRedux(<FormInput />);
  fireEvent.changeText(getByTestId('address-input'), address);
  expect(getByTestId('address-input').props.value).toEqual(address);
});
