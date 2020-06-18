import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {connect} from 'react-redux';
import isShowModal from '../action/IsShowAction';
import {handleNameInput, handleAddressInput, addData} from '../action/index';

const SubmitButton = props => {
  const {
    addData,
    address,
    handleAddressInput,
    handleNameInput,
    isShowModal,
    name,
  } = props;

  const SubmitData = () => {
    addData(name, address);
    handleNameInput('');
    handleAddressInput('');
    isShowModal();
  };

  return (
    <View style={styles.buttonContainer}>
      <TouchableOpacity
        style={styles.buttonSubmit}
        onPress={() => SubmitData()}>
        <Text style={{fontSize: 18, color: '#ecf0f1'}}>Submit</Text>
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
  };
};

export default connect(
  mapStateToProps,
  {handleNameInput, handleAddressInput, isShowModal, addData},
)(SubmitButton);
