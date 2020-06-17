import FormReducer from '../reducer/FormInputReducer';
import IsShowReducer from '../reducer/IsShowReducer';
import AddDataReducer from '../reducer/DataReducer';
import {combineReducers} from 'redux';

const rootReducer = combineReducers({
  val: FormReducer,
  show: IsShowReducer,
  add: AddDataReducer,
});

export default rootReducer;
