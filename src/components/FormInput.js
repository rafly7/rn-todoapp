import React from 'react';
import {
  View,
  Modal,
  Text,
  TouchableOpacity,
  Alert,
  StyleSheet,
  Dimensions,
} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {TextInput} from 'react-native-paper';
import {connect} from 'react-redux';
import isShowModal from '../action/isShowAction';
import {handleNameInput, handleAddressInput, addData} from '../action/index';

const screenHeight = Math.round(Dimensions.get('screen').height);
const screenWidth = Math.round(Dimensions.get('screen').width);

const FormInput = props => {
  // console.log(props);
  // const FormInput = ({
  //   handleNameInput,
  //   handleAddressInput,
  //   isShowModal,
  //   name,
  //   address,
  //   show,
  // }) => {
  // console.log(props);
  const SubmitData = () => {
    props.addData(props.name, props.address);
    props.handleNameInput('');
    props.handleAddressInput('');
    props.isShowModal();
    // console.log(props);
  };

  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={props.show}
      hardwareAccelerated={true}
      onRequestClose={() => {
        Alert.alert('Modal has been closed');
      }}>
      <View style={styles.dialogContainer}>
        <View style={styles.modalView}>
          <Text style={styles.textLabel}>Name</Text>
          {/* <Text>{name}</Text> */}
          <View style={styles.formContainer}>
            <FontAwesome name="user-o" color="#2980b9" size={25} />
            <TextInput
              placeholder="Your Name"
              style={styles.textInput}
              onChangeText={text => props.handleNameInput(text)}
            />
          </View>
          <Text style={styles.textLabel}>Address</Text>
          {/* <Text>{address}</Text> */}
          <View style={styles.formContainer}>
            <Feather name="map-pin" color="#2980b9" size={25} />
            <TextInput
              placeholder="Your Address"
              style={styles.textInput}
              onChangeText={text => props.handleAddressInput(text)}
            />
          </View>

          <View style={styles.buttonContainer}>
            <TouchableOpacity
              style={styles.buttonSubmit}
              onPress={() => SubmitData()}>
              <Text style={{fontSize: 18, color: '#ecf0f1'}}>Submit</Text>
            </TouchableOpacity>
          </View>
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
    show: state.show,
  };
};

export default connect(
  mapStateToProps,
  {handleNameInput, handleAddressInput, isShowModal, addData},
)(FormInput);
