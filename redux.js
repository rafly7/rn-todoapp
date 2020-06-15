const redux = require('redux');

const createStore = redux.createStore;

const initialState = {
  value: 0,
  age: 17,
};

const rootReducer = (state = initialState, action) => {
  console.log(action);
  switch (action.type) {
    case 'ADD_AGE':
      return {
        ...state,
        age: state.age + 1,
      };
    case 'CHANGE_VALUE':
      return {
        ...state,
        value: state.value + action.newValue,
      };
  }
  return state;
};

const store = createStore(rootReducer);
store.subscribe(() => {
  console.log('store change:', store.getState());
});
// console.log(store.getState());

store.dispatch({type: 'ADD_AGE'});
store.dispatch({type: 'CHANGE_VALUE', newValue: 18});
console.log(store.getState());
