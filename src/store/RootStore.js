import FormReducer from '../reducer/formInputReducer';
import IsShowReducer from '../reducer/isShowReducer';
import AddDataReducer from '../reducer/addDataReducer';
import {combineReducers} from 'redux';

const rootReducer = combineReducers({
  val: FormReducer,
  show: IsShowReducer,
  add: AddDataReducer,
});

export default rootReducer;
