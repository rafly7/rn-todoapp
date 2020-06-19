import React, {useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Keyboard} from 'react-native';
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
  const {handleNameInput, handleAddressInput} = props;

  return (
    <>
      <Text style={styles.textLabel}>Name</Text>
      <View style={styles.formContainer}>
        <FontAwesome name="user-o" color="#2980b9" size={25} />
        <TextInput
          placeholder="Your Name"
          style={styles.textInput}
          testID="name-input"
          onChangeText={text => handleNameInput(text)}
        />
      </View>

      <Text style={styles.textLabel}>Address</Text>
      <View style={styles.formContainer}>
        <Feather name="map-pin" color="#2980b9" size={25} />
        <TextInput
          placeholder="Your Address"
          style={styles.textInput}
          testID="address-input"
          clearButtonMode="while-editing"
          onChangeText={text => handleAddressInput(text)}
        />
      </View>

      <Text style={styles.textLabel}>Date</Text>
      <View style={styles.formContainer}>
        <Feather name="calendar" color="#2980b9" size={25} />
        <TouchableOpacity
          style={{flex: 1}}
          onPress={() => [setShowDate(!showDate), Keyboard.dismiss()]}>
          {showDate ? (
            <DateTimePicker handleCancel={setShowDate} initValue={setValue} />
          ) : null}
          <TextInput
            placeholder="Your Birth"
            style={styles.textInput2}
            editable={false}
            value={value ? FormatDate(props.date) : ''}
          />
        </TouchableOpacity>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
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
