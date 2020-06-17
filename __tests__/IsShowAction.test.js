import {is_show} from '../src/utils/constType';
import IsShowAction from '../src/action/IsShowAction';

it('IsShow Action Should return new action', () => {
  const expectedAction = {
    type: is_show,
  };
  expect(IsShowAction()).toEqual(expectedAction);
});
