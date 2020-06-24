import React from 'react';
import {View, TouchableOpacity, Text, StyleSheet} from 'react-native';
import {connect} from 'react-redux';
import Feather from 'react-native-vector-icons/Feather';
import {v1 as uuidv1} from 'react-native-uuid';
import {
  handleTitleInput,
  handleNoteInput,
  handleClear,
  isShowModal,
  addData,
} from '../action';
import {FormatDate, FormatTime} from '../logic/Format';

const ButtonFormNote = props => {
  const {
    title,
    note,
    date,
    time,
    valueDate,
    valueTime,
    setValueDate,
    setValueTime,
    handleClear,
    isShowModal,
    addData,
  } = props;
  return (
    <View style={styles.buttonContainer}>
      <View style={styles.buttonSubContainer}>
        <TouchableOpacity
          style={styles.buttonBack}
          onPress={() => [handleClear(), isShowModal()]}>
          <Feather name="delete" size={25} color="#eb2f06" />
        </TouchableOpacity>
        <TouchableOpacity
          disabled={title.length > 0 && note.length > 0 ? false : true}
          onPress={() => [
            addData(
              uuidv1(),
              title,
              note,
              valueDate ? FormatDate(date) : '',
              valueTime ? FormatTime(time) : '',
            ),
            isShowModal(),
            handleClear(),
            setValueTime(false),
            setValueDate(false),
          ]}>
          <Text
            style={[
              styles.buttonText,
              {
                color:
                  title.length > 0 && note.length > 0 ? '#0984e3' : '#74b9ff',
              },
            ]}>
            SAVE
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const mapStateToProps = state => {
  return {
    title: state.val.title,
    note: state.val.note,
    date: state.val.date,
    time: state.val.time,
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
  {handleTitleInput, handleNoteInput, isShowModal, addData, handleClear},
)(ButtonFormNote);
