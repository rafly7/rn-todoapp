export const handleNameInput = val => {
  return {
    type: 'NAME_INPUT',
    payload: val,
  };
};

export const handleAddressInput = val => {
  return {
    type: 'ADDRESS_INPUT',
    payload: val,
  };
};
