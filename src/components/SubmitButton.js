import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {connect} from 'react-redux';
import isShowModal from '../action/IsShowAction';
import {handleNameInput, handleAddressInput, addData} from '../action/index';
import FormatDate from '../logic/FormatDate';
// const process = require('process');
import {v1 as uuidv1} from 'react-native-uuid';
// function getNanoSecTime() {
//   var hr = process.hrtime();
//   // console.log(hrTime)
//   return hr;
//    //return hr[0] * 1000_000_000 + hr[1];
// }
const SubmitButton = props => {
  console.log(uuidv1());
  const {
    addData,
    address,
    date,
    handleAddressInput,
    handleNameInput,
    isShowModal,
    name,
  } = props;

  const SubmitData = () => {
    addData(uuidv1(), name, address, FormatDate(date));
    handleNameInput('');
    handleAddressInput('');
    isShowModal();
  };
  return (
    <View style={styles.buttonContainer}>
      <TouchableOpacity
        style={styles.buttonSubmit}
        onPress={() => SubmitData()}>
        <Text style={{fontSize: 20, color: '#ecf0f1'}}>Submit</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    marginTop: 25,
    flexDirection: 'row',
    height: 50,
  },
  buttonSubmit: {
    flex: 1,
    borderRadius: 30,
    backgroundColor: '#2ecc71',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

const mapStateToProps = state => {
  return {
    name: state.val.name,
    address: state.val.address,
    date: state.val.date,
  };
};

export default connect(
  mapStateToProps,
  {handleNameInput, handleAddressInput, isShowModal, addData},
)(SubmitButton);
