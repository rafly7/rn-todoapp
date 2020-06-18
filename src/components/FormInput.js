import React from 'react';
import {View, Modal, StyleSheet, Dimensions} from 'react-native';
import {connect} from 'react-redux';
import {handleNameInput, handleAddressInput} from '../action/index';
import SubmitButton from './SubmitButton';
import TextInputFrom from './InputText';

const screenHeight = Math.round(Dimensions.get('screen').height);
const screenWidth = Math.round(Dimensions.get('screen').width);

const FormInput = props => {
  const {show} = props;
  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={show}
      hardwareAccelerated={true}>
      <View style={styles.dialogContainer}>
        <View style={styles.modalView}>
          <TextInputFrom />
          <SubmitButton />
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  dialogContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalView: {
    margin: 20,
    borderRadius: 20,
    height: screenHeight - 500,
    width: screenWidth - 120,
    backgroundColor: '#ecf0f1',
    justifyContent: 'center',
    padding: 20,
    opacity: 0.95,
  },
  textLabel: {
    fontSize: 18,
  },
  formContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  textInput: {
    height: 40,
    marginLeft: 10,
    flex: 1,
    backgroundColor: 'transparent',
    paddingLeft: -5,
  },
});

const mapStateToProps = state => {
  return {
    show: state.show,
  };
};

export default connect(
  mapStateToProps,
  {handleNameInput, handleAddressInput},
)(FormInput);
