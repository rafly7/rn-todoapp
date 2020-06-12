import React, {useState} from 'react';
import {IconButton, Colors, TextInput} from 'react-native-paper';
import {
  TouchableOpacity,
  StyleSheet,
  Modal,
  Alert,
  View,
  Text,
  Dimensions,
} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';

const screenWidth = Math.round(Dimensions.get('screen').width);
const screenHeight = Math.round(Dimensions.get('screen').height);

const FloatingIconButton = () => {
  const [data, setData] = useState({
    isShow: false,
  });

  const isShowModal = val => {
    setData({
      ...data,
      isShow: val,
    });
  };

  return (
    <View style={styles.mainContainer}>
      <FormInput isShow={data.isShow} buttonShow={isShowModal} />
      <TouchableOpacity
        style={styles.iconButton}
        onPress={() => setData({...data, isShow: !data.isShow})}>
        <Feather name="plus" color="blue" size={70} />
      </TouchableOpacity>
    </View>
  );
};

const FormInput = ({isShow, buttonShow}) => {
  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={isShow}
      hardwareAccelerated={true}
      onRequestClose={() => {
        Alert.alert('Modal has been closed');
      }}>
      <View style={styles.dialogContainer}>
        <View style={styles.modalView}>
          <Text style={styles.textLabel}>Name</Text>
          <View style={styles.formContainer}>
            <FontAwesome name="user-o" color="red" size={25} />
            <TextInput placeholder="Your Name" style={styles.textInput} />
          </View>
          <Text style={styles.textLabel}>Address</Text>
          <View style={styles.formContainer}>
            <Feather name="map-pin" color="red" size={25} />
            <TextInput placeholder="Your Address" style={styles.textInput} />
          </View>
          <View style={styles.buttonContainer}>
            <TouchableOpacity
              style={styles.buttonSubmit}
              onPress={() => buttonShow(!isShow)}>
              <Text style={{fontSize: 18}}>Submit</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  iconButton: {
    right: 0,
    bottom: 0,
    position: 'absolute',
    margin: 10,
    backgroundColor: 'red',
    borderRadius: 140,
    width: 70,
    height: 70,
  },
  dialogContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // marginVertical: 100,
    // marginHorizontal: 100,
  },
  modalView: {
    margin: 20,
    borderRadius: 20,
    height: screenHeight - 500,
    width: screenWidth - 120,
    backgroundColor: 'white',
    justifyContent: 'center',
    padding: 20,
    opacity: 0.75,
  },
  textLabel: {
    fontSize: 18,
  },
  formContainer: {
    flexDirection: 'row',
    // justifyContent: 'center',
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
    backgroundColor: 'blue',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default FloatingIconButton;
