import React, {useState} from 'react';
import {
  Modal,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Keyboard,
  TouchableHighlight,
} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {TextInput} from 'react-native-paper';
import {connect} from 'react-redux';
import {handleNameInput, handleAddressInput} from '../action/index';
import DateTimePicker from './DateTimePicker';
import FormatDate from '../logic/FormatDate';

const TextInputForm = props => {
  const [showDate, setShowDate] = useState(false);
  const [value, setValue] = useState(false);
  const [showNote, setShowNote] = useState(false);
  const {handleNameInput, handleAddressInput} = props;

  return (
    <>
      <Text style={styles.textLabel}>Title</Text>
      <View style={styles.formContainer}>
        <FontAwesome name="tag" color="#2980b9" size={25} />
        <TextInput
          placeholder="Your title"
          style={styles.textInput}
          testID="name-input"
          onChangeText={text => handleNameInput(text)}
        />
      </View>

      <Text style={styles.textLabel}>Notes</Text>
      <View style={styles.formContainer}>
        <FontAwesome name="sticky-note" color="#2980b9" size={25} />
        {/* <Feather name="map-pin" color="#2980b9" size={25} /> */}
        <TouchableOpacity onPress={() => setShowNote(!showNote)}>
          <InputNote showNote={showNote} setShowNote={setShowNote} />
          <TextInput
            placeholder="Your Notes"
            style={styles.textInput}
            testID="address-input"
            editable={false}
            onChangeText={text => handleAddressInput(text)}
          />
        </TouchableOpacity>
      </View>

      <Text style={styles.textLabel}>Date</Text>
      <View style={styles.formContainer}>
        {/* <FontAwesome name="calendar" color="#2980b9" size={25} /> */}
        <Feather name="calendar" color="#2980b9" size={25} />
        <TouchableOpacity
          style={{flex: 1}}
          onPress={() => [setShowDate(!showDate), Keyboard.dismiss()]}>
          {showDate ? (
            <DateTimePicker handleCancel={setShowDate} initValue={setValue} />
          ) : null}
          <TextInput
            placeholder="Reminder"
            style={styles.textInput2}
            editable={false}
            value={value ? FormatDate(props.date) : ''}
          />
        </TouchableOpacity>
      </View>
    </>
  );
};

const InputNote = props => {
  console.log(props);
  return (
    <Modal
      animationType="slide"
      visible={props.showNote}
      hardwareAccelerated={true}>
      <View style={{flex: 1, marginTop: 20, marginHorizontal: 20}}>
        <View style={{alignItems: 'flex-end', marginBottom: 10}}>
          <TouchableHighlight
            onPress={() => props.setShowNote(!props.showNote)}>
            <Text>SAVE</Text>
          </TouchableHighlight>
        </View>
        <View style={{flex: 1, backgroundColor: 'transparent'}}>
          <Text style={{fontSize: 22, paddingLeft: 11}}>Project1</Text>
          <TextInput
            placeholder="Notes"
            numberOfLines={1000}
            style={{paddingLeft: -10, backgroundColor: 'transparent'}}
            multiline={true}
          />
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  textLabel: {
    fontSize: 18,
    // paddingTop: 5
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
  textInput2: {
    height: 40,
    marginLeft: 10,
    // flex: 1,
    backgroundColor: 'transparent',
    paddingLeft: -5,
  },
});

const mapStateToProps = state => {
  return {
    date: state.val.date,
  };
};
export default connect(
  mapStateToProps,
  {handleNameInput, handleAddressInput},
)(TextInputForm);
