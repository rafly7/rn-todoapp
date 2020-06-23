import React, {useState} from 'react';
import {View, Text, TouchableOpacity, StyleSheet, Modal} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {connect} from 'react-redux';
import {deleteData} from '../action/DataAction';
import ViewNote from './ViewNote';

const DataList = props => {
  const [showView, setShowView] = useState(false);
  const {title, note, createdAt, key, reminderDate, reminderTime} = props.item;
  return (
    <View style={styles.cardsContainer}>
      <View
        style={[
          styles.cardInfo,
          {backgroundColor: props.index % 2 === 0 ? '#78e08f' : '#b8e994'},
        ]}>
        <Text style={styles.textTitle}>{title}</Text>
        <Text style={styles.textCreated}>Created: {createdAt}</Text>
        {reminderDate !== '' || reminderTime !== '' ? (
          <Text>
            Reminder: {reminderDate} {reminderTime}
          </Text>
        ) : null}
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={() => props.deleteData(key)}>
          <FontAwesome5 name="trash-alt" color="#d63031" size={30} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setShowView(!showView)}>
          <ViewNote
            title={title}
            note={note}
            setShowView={setShowView}
            showView={showView}
          />
          <FontAwesome name="eye" color="#1e3799" size={30} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cardsContainer: {
    flex: 1,
    height: 90,
    borderRadius: 5,
    marginBottom: 15,
    flexDirection: 'row',
  },
  cardInfo: {
    flex: 3,
    justifyContent: 'space-evenly',
    paddingLeft: 20,
    borderTopLeftRadius: 40,
    borderBottomLeftRadius: 40,
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
  },
  textTitle: {
    fontSize: 18,
  },
  textCreated: {
    fontSize: 14,
  },
  buttonContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
});

export default connect(
  null,
  {deleteData},
)(DataList);
