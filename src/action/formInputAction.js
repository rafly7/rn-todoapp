import {
  title_input,
  note_input,
  date_input,
  time_input,
  clear_input,
} from '../utils/constType';

export const handleTitleInput = val => {
  return {
    type: title_input,
    payload: val,
  };
};

export const handleNoteInput = val => {
  return {
    type: note_input,
    payload: val,
  };
};

export const handleDate = selectedDate => {
  return {
    type: date_input,
    payload: selectedDate,
  };
};

export const handleTime = selectedTime => {
  return {
    type: time_input,
    payload: selectedTime,
  };
};

export const handleClear = () => {
  return {
    type: clear_input,
  };
};
