import React from 'react';
import {View, Modal, Text, StyleSheet, Dimensions} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {TextInput} from 'react-native-paper';
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
          <Text style={styles.textLabel}>Name</Text>
          <View style={styles.formContainer}>
            <FontAwesome name="user-o" color="#2980b9" size={25} />
            <TextInput
              placeholder="Your Name"
              style={styles.textInput}
              testID="name-input"
              onChangeText={text => props.handleNameInput(text)}
            />
          </View>
          <Text style={styles.textLabel}>Address</Text>
          <View style={styles.formContainer}>
            <Feather name="map-pin" color="#2980b9" size={25} />
            <TextInput
              placeholder="Your Address"
              style={styles.textInput}
              testID="address-input"
              onChangeText={text => props.handleAddressInput(text)}
            />
          </View>

          <View style={styles.buttonContainer}>
            <TouchableOpacity
              style={styles.buttonSubmit}
              testID="submit-data"
              onPress={() => SubmitData()}>
              <Text style={{fontSize: 18, color: '#ecf0f1'}}>Submit</Text>
            </TouchableOpacity>
          </View>
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
