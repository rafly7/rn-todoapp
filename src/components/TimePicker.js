import React from 'react';
import DateTimePicker from '@react-native-community/datetimepicker';
import {connect} from 'react-redux';
import {handleTime} from '../action';

const TimePicker = props => {
  const onChange = (event, selectDate) => {
    const currentDate = selectDate || props.time;
    props.handleCancel(false);
    // console.log(typeof selectDate !== 'undefined');
    if (typeof selectDate !== 'undefined') {
      props.initValue(true);
    }
    props.handleTime(currentDate);
  };

  return (
    <DateTimePicker
      mode="time"
      is24Hour={true}
      value={props.time}
      display="default"
      onChange={onChange}
    />
  );
};

const mapStateToProps = state => {
  return {
    time: state.val.time,
  };
};

export default connect(
  mapStateToProps,
  {handleTime},
)(TimePicker);
