import {FormatDate, FormatTime} from '../src/logic/Format';

describe('Format Date and Time', () => {
  let d = new Date();
  it('Date format', () => {
    d.setFullYear(2020, 11, 31);
    expect(FormatDate(d)).toEqual('2020/12/31');
  });
  it('Hours and Minutes format', () => {
    d.setHours(9);
    d.setMinutes(5);
    expect(FormatTime(d)).toEqual('09:05');
  });
});
