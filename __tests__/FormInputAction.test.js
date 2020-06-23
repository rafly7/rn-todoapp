import {
  title_input,
  note_input,
  date_input,
  time_input,
} from '../src/utils/constType';
import {
  handleTitleInput,
  handleNoteInput,
  handleDate,
  handleTime,
} from '../src/action/index';

let mockDateandTime;

describe('FormNote action', () => {
  it('handleTitleInput should return new action if receiving input', () => {
    const title = 'Project authenticate';
    const expectedAction = {
      type: title_input,
      payload: title,
    };
    expect(handleTitleInput(title)).toEqual(expectedAction);
  });

  it('handleNoteInput should return new action if receiving input', () => {
    const notes =
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam tempus mollis ligula, accumsan fringilla';
    const expectedAction = {
      type: note_input,
      payload: notes,
    };
    expect(handleNoteInput(notes)).toEqual(expectedAction);
  });

  describe('FormNote action with mocking', () => {
    beforeAll(() => {
      const miliseconds = 1693807460236;
      mockDateandTime = () => {
        return new Date(miliseconds);
      };
    });

    it('handleDate should return new action if receiving input', () => {
      let date = mockDateandTime();
      const expectedAction = {
        type: date_input,
        payload: date,
      };
      expect(handleDate(date)).toEqual(expectedAction);
    });

    it('handleTimr should return new action if receiving input', () => {
      let time = mockDateandTime();
      const expectedAction = {
        type: time_input,
        payload: time,
      };
      expect(handleTime(time)).toEqual(expectedAction);
    });
  });
});
