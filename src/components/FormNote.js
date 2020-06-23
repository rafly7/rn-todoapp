import React, {useState} from 'react';
import {
  Modal,
  View,
  Text,
  TouchableOpacity,
  Keyboard,
  StyleSheet,
} from 'react-native';
import {TextInput} from 'react-native-paper';
import {connect} from 'react-redux';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import {v1 as uuidv1} from 'react-native-uuid';
import {handleTitleInput, handleNoteInput, isShowModal} from '../action';
import DatePicker from './DatePicker';
import TimePicker from './TimePicker';
import {FormatDate, FormatTime} from '../logic/Format';
import {addData} from '../action/DataAction';
import ButtonFormNote from './ButtonFormNote';

const FormNote = props => {
  const {
    isShowModal,
    show,
    handleTitleInput,
    handleNoteInput,
    title,
    note,
    date,
    time,
    addData,
  } = props;
  const [showDate, setShowDate] = useState(false);
  const [valueDate, setValueDate] = useState(false);
  const [showTime, setShowTime] = useState(false);
  const [valueTime, setValueTime] = useState(false);

  return (
    <Modal animationType="slide" visible={show} hardwareAccelerated={true}>
      <View style={styles.modalContainer}>
        <ButtonFormNote
          valueDate={valueDate}
          valueTime={valueTime}
          setValueDate={setValueDate}
          setValueTime={setValueTime}
        />
        <View style={styles.mainContainer}>
          <View style={styles.buttonContainerPicker}>
            <FontAwesome name="tag" color="#2980b9" size={25} />
            <TextInput
              placeholder="Title"
              style={styles.textInputTitle}
              maxLength={20}
              onChangeText={text => handleTitleInput(text)}
            />
          </View>
          <View
            style={[
              styles.buttonContainerPicker,
              {marginTop: 15, marginBottom: 10},
            ]}>
            <>
              <Feather name="calendar" color="#2980b9" size={25} />
              <TouchableOpacity
                style={styles.mainContainer}
                onPress={() => [setShowDate(!showDate), Keyboard.dismiss()]}>
                {showDate ? (
                  <DatePicker
                    handleCancel={setShowDate}
                    initValue={setValueDate}
                  />
                ) : null}
                <TextInput
                  placeholder="Reminder"
                  editable={false}
                  style={styles.buttonReminder}
                  value={valueDate ? FormatDate(props.date) : ''}
                />
              </TouchableOpacity>
            </>

            <>
              <Feather
                name="clock"
                color="#2980b9"
                size={25}
                style={styles.iconClock}
              />
              <TouchableOpacity
                style={styles.mainContainer}
                onPress={() => [setShowTime(!showTime), Keyboard.dismiss()]}>
                {showTime ? (
                  <TimePicker
                    handleCancel={setShowTime}
                    initValue={setValueTime}
                  />
                ) : null}
                <TextInput
                  placeholder="Reminder"
                  editable={false}
                  style={styles.buttonReminder}
                  value={valueTime ? FormatTime(props.time) : ''}
                />
              </TouchableOpacity>
            </>
          </View>
          <TextInput
            placeholder="Notes"
            numberOfLines={50}
            style={styles.background}
            scrollEnabled={true}
            multiline={true}
            onChangeText={text => handleNoteInput(text)}
          />
        </View>
      </View>
    </Modal>
  );
};

const mapStateToProps = state => {
  return {
    show: state.show,
    title: state.val.title,
    note: state.val.note,
    date: state.val.date,
    time: state.val.time,
    add: state.add,
  };
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
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
  buttonText: {
    color: '#3498db',
    fontSize: 17,
  },
  buttonContainerPicker: {
    flexDirection: 'row',
    paddingLeft: 12,
  },
  textInputTitle: {
    backgroundColor: 'transparent',
    flex: 1,
    fontSize: 20,
    height: 30,
    fontWeight: 'bold',
  },
  buttonReminder: {
    flex: 1,
    height: 25,
    fontSize: 20,
    backgroundColor: 'transparent',
  },
  iconClock: {
    paddingLeft: 10,
  },
  background: {
    backgroundColor: 'transparent',
  },
});

export default connect(
  mapStateToProps,
  {isShowModal, handleNoteInput, handleTitleInput, addData},
)(FormNote);
