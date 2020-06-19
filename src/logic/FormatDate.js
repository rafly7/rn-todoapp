const FormatDate = date => {
  let month;
  if (date.getMonth() + 1 === 12) {
    month = 1;
  } else {
    month = date.getMonth() + 1;
  }
  if (month.toString().length === 1) {
    month = '0' + month;
  }
  return date.getFullYear() + '/' + month + '/' + date.getDate();
};

export default FormatDate;
