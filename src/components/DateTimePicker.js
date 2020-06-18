import React from 'react';
import DateTimePicker from '@react-native-community/datetimepicker';
import { connect } from 'react-redux';
import { handleDate } from '../action';

const DatePicker = props => {
  return <DateTimePicker
    mode="date"
    display="default"
    onChange={}
  />;
}

const mapStateToProps = state => {
    return {
        date: state.val.date
    }
}

export default connect(mapStateToProps,{handleDate})(DatePicker)