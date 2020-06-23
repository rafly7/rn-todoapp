import {is_show} from '../src/utils/constType';
import {isShowModal} from '../src/action';

it('isShowModal Action call should return new action', () => {
  const expectedAction = {
    type: is_show,
  };
  expect(isShowModal()).toEqual(expectedAction);
});
