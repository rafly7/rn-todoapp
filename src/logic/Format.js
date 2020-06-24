export const FormatDate = date => {
  let month = date.getMonth() + 1;
  if (month.toString().length === 1) {
    month = '0' + month;
  }
  return date.getFullYear() + '/' + month + '/' + date.getDate();
};

export const FormatTime = time => {
  let hours = time.getHours();
  let minutes = time.getMinutes();
  if (hours < 10) {
    hours = '0' + hours;
  }
  if (minutes < 10) {
    minutes = '0' + minutes;
  }
  return hours + ':' + minutes;
};
