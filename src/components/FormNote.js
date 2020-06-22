import React, {useState} from 'react';
import {Modal, View, Text, TouchableOpacity, Keyboard} from 'react-native';
import {TextInput} from 'react-native-paper';
import {connect} from 'react-redux';
import IsShowModal from '../action/IsShowAction';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import {v1 as uuidv1} from 'react-native-uuid';
import {
  handleTitleInput,
  handleNoteInput,
  handleDate,
} from '../action/FormInputAction';
import DatePicker from './DatePicker';
import TimePicker from './TimePicker';
import {FormatDate, FormatTime} from '../logic/Format';
import {addData} from '../action/DataAction';

const FormNote = props => {
  const {
    IsShowModal,
    show,
    handleTitleInput,
    handleNoteInput,
    handleDate,
    title,
    note,
    date,
    time,
    addData,
    add,
  } = props;
  const [showDate, setShowDate] = useState(false);
  const [valueDate, setValueDate] = useState(false);
  const [showTime, setShowTime] = useState(false);
  const [valueTime, setValueTime] = useState(false);
  // console.trace();
  return (
    <Modal animationType="slide" visible={show} hardwareAccelerated={true}>
      <View style={{flex: 1, marginTop: 20, marginRight: 20}}>
        <View
          style={{
            alignItems: 'flex-end',
            marginBottom: 10,
          }}>
          <View style={{flexDirection: 'row'}}>
            <TouchableOpacity
              style={{paddingRight: 20}}
              onPress={() => IsShowModal()}>
              <Feather name="delete" size={25} color="#eb2f06" />
            </TouchableOpacity>
            <TouchableOpacity
              disabled={title.length > 0 && note.length > 0 ? false : true}
              onPress={() => [
                IsShowModal(),
                setValueTime(false),
                setValueDate(false),
                addData(
                  uuidv1(),
                  title,
                  note,
                  valueDate ? FormatDate(date) : '',
                  valueTime ? FormatTime(time) : '',
                ),
              ]}>
              <Text style={{color: '#3498db', fontSize: 17}}>SAVE</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={{flex: 1}}>
          <View style={{flexDirection: 'row', paddingLeft: 12}}>
            <FontAwesome name="tag" color="#2980b9" size={25} />
            <TextInput
              placeholder="Title"
              style={{
                backgroundColor: 'transparent',
                flex: 1,
                fontSize: 20,
                height: 30,
                fontWeight: 'bold',
              }}
              maxLength={20}
              onChangeText={text => handleTitleInput(text)}
            />
          </View>
          <View
            style={{
              flexDirection: 'row',
              paddingLeft: 12,
              marginTop: 15,
              marginBottom: 10,
            }}>
            <>
              <Feather name="calendar" color="#2980b9" size={25} />
              <TouchableOpacity
                style={{flex: 1}}
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
                  style={{
                    flex: 1,
                    height: 25,
                    fontSize: 20,
                    backgroundColor: 'transparent',
                  }}
                  value={valueDate ? FormatDate(props.date) : ''}
                />
              </TouchableOpacity>
            </>

            <>
              <Feather
                name="clock"
                color="#2980b9"
                size={25}
                style={{paddingLeft: 10}}
              />
              <TouchableOpacity
                style={{flex: 1}}
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
                  style={{
                    flex: 1,
                    height: 25,
                    fontSize: 20,
                    backgroundColor: 'transparent',
                  }}
                  value={valueTime ? FormatTime(props.time) : ''}
                />
              </TouchableOpacity>
            </>
          </View>
          <TextInput
            placeholder="Notes"
            numberOfLines={50}
            style={{backgroundColor: 'transparent'}}
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

export default connect(
  mapStateToProps,
  {IsShowModal, handleNoteInput, handleTitleInput, addData},
)(FormNote);
