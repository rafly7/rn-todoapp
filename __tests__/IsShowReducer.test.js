import {is_show} from '../src/utils/constType';
import IsShowReducer from '../src/reducer/IsShowReducer';

describe('IsShow Reducer', () => {
  it('Should return default state', () => {
    const newState = IsShowReducer(undefined, {});
    expect(newState).toEqual(false);
  });

  it('Should return new state if receiving type', () => {
    const newState = IsShowReducer(undefined, {
      type: is_show,
    });
    expect(newState).toEqual(true);
  });
});
