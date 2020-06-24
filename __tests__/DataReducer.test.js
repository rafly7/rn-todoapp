import {add_data, delete_data} from '../src/utils/constType';
import DataReducer from '../src/reducer/DataReducer';
import {v1 as uuidv1} from 'react-native-uuid';
import {FormatDate, FormatTime} from '../src/logic/Format';

let mockUuidV1;
let mockDate;
let mockTime;
let mockDateNow;

describe('Add Data Reducer', () => {
  it('Should return default state', () => {
    const newState = DataReducer(undefined, {});
    expect(newState).toEqual([]);
  });

  beforeEach(() => {
    mockUuidV1 = () => {
      return uuidv1();
    };
  });

  beforeAll(() => {
    const miliseconds = 1693807460236;

    mockDateNow = () => {
      return FormatDate(new Date());
    };

    mockDate = () => {
      return FormatDate(new Date(miliseconds));
    };

    mockTime = () => {
      return FormatTime(new Date(miliseconds));
    };
  });

  it('Add Data Should return new state if receiving type', () => {
    const uuid = mockUuidV1();
    const dateNow = mockDateNow();
    const date = mockDate();
    const time = mockTime();
    const title = 'Dan';
    const note = 'bip';

    const data = [
      {
        key: uuid,
        createdAt: dateNow,
        title: title,
        note: note,
        reminderDate: date,
        reminderTime: time,
      },
    ];
    const newState = DataReducer(undefined, {
      type: add_data,
      payload_id: uuid,
      payload_title: title,
      payload_note: note,
      payload_date: date,
      payload_time: time,
    });
    expect(newState).toEqual(data);
  });

  it('Add Data Should return empty array if note or title is empty string', () => {
    const uuid = mockUuidV1();
    const title = 'XYZ';
    const note = 'asdasdnljndw';
    const data = [];
    let newState = DataReducer(undefined, {
      type: add_data,
      payload_id: uuid,
      payload_title: title,
      payload_note: '',
      payload_date: mockDate(),
      payload_time: mockTime(),
    });
    expect(newState).toEqual(data);
    newState = DataReducer(undefined, {
      type: add_data,
      payload_id: uuid,
      payload_title: '',
      payload_note: note,
      payload_date: mockDate(),
      payload_time: mockTime(),
    });
    expect(newState).toEqual(data);
  });

  it('Delete Data Should return empty array if receiving type', () => {
    const initialstate = [
      {
        key: mockUuidV1(),
        createdAt: mockDateNow(),
        title: 'Create Authentication',
        note: 'Tt',
        reminderDate: '2021/06/30',
        reminderTime: '16:20',
      },
    ];
    const newState = DataReducer(initialstate, {
      type: delete_data,
      key: mockUuidV1(),
    });
    expect(newState).toEqual([]);
  });
});
