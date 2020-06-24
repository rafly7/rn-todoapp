import React from 'react';
import {Modal, View, TouchableOpacity, StyleSheet} from 'react-native';
import {TextInput} from 'react-native-paper';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';

const ViewNote = props => {
  return (
    <Modal
      animationType="fade"
      visible={props.showView}
      hardwareAccelerated={true}>
      <View style={styles.modalContainer}>
        <View style={styles.buttonContainer}>
          <View style={styles.buttonSubContainer}>
            <TouchableOpacity
              style={styles.buttonBack}
              onPress={() => props.setShowView(false)}>
              <Feather name="delete" size={25} color="#eb2f06" />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.textinputContainer}>
          <View style={styles.textinputSubContainer}>
            <FontAwesome name="tag" color="#2980b9" size={25} />
            <TextInput
              placeholder="Title"
              style={styles.textInput}
              editable={false}
              value={props.title}
            />
          </View>
          <TextInput
            placeholder="Notes"
            numberOfLines={50}
            style={{backgroundColor: 'transparent'}}
            scrollEnabled={true}
            editable={false}
            multiline={true}
            value={props.note}
          />
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    marginTop: 20,
    marginRight: 20,
  },
  buttonContainer: {
    alignItems: 'flex-end',
    marginBottom: 10,
  },
  buttonSubContainer: {
    flexDirection: 'row',
  },
  buttonBack: {
    paddingRight: 20,
  },
  textinputContainer: {
    flex: 1,
  },
  textinputSubContainer: {
    flexDirection: 'row',
    paddingLeft: 12,
  },
  textInput: {
    backgroundColor: 'transparent',
    flex: 1,
    fontSize: 20,
    height: 30,
    fontWeight: 'bold',
  },
});

export default ViewNote;
