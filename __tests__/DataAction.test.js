import {add_data, delete_data} from '../src/utils/constType';
import {addData, deleteData} from '../src/action/DataAction';
import {v1 as uuidv1} from 'react-native-uuid';
import {FormatDate, FormatTime} from '../src/logic/Format';

let mockUuidV1;
let mockDate;
let mockTime;

describe('Data action', () => {
  beforeAll(() => {
    const miliseconds = 1693807460236;
    mockUuidV1 = () => {
      return uuidv1();
    };
    mockDate = () => FormatDate(new Date(miliseconds));
    mockTime = () => FormatTime(new Date(miliseconds));
  });
  it('addData should return new action if receiving input parameter', () => {
    const uuid = mockUuidV1();
    const date = mockDate();
    const time = mockTime();
    const note = 'Create Project';
    const title =
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam tempus mollis ligula, accumsan fringilla tellus mattis at';
    const expectedAction = {
      type: add_data,
      payload_id: uuid,
      payload_title: title,
      payload_note: note,
      payload_date: date,
      payload_time: time,
    };
    expect(addData(uuid, title, note, date, time)).toEqual(expectedAction);
  });

  it('deleteData should return new action if receiving input parameter', () => {
    const uuid = mockUuidV1();
    const expectedAction = {
      type: delete_data,
      key: uuid,
    };
    expect(deleteData(uuid)).toEqual(expectedAction);
  });
});
