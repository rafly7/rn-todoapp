import React from 'react';
import DateTimePicker from '@react-native-community/datetimepicker';
import {connect} from 'react-redux';
import {handleDate} from '../action';

const DatePicker = props => {
  const onChange = (event, selectDate) => {
    const currentDate = selectDate || props.date;
    props.handleCancel(false);
    // console.log(typeof selectDate !== 'undefined');
    if (typeof selectDate !== 'undefined') {
      props.initValue(true);
    }
    props.handleDate(currentDate);
  };

  return (
    <DateTimePicker
      mode="date"
      value={props.date}
      display="default"
      onChange={onChange}
      minimumDate={new Date().getTime()}
      maximumDate={new Date(2060, 0, 1)}
    />
  );
};

const mapStateToProps = state => {
  return {
    date: state.val.date,
  };
};

export default connect(
  mapStateToProps,
  {handleDate},
)(DatePicker);
