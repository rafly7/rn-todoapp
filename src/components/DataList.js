import React, {useState} from 'react';
import {View, Text, TouchableOpacity, StyleSheet, Modal} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {connect} from 'react-redux';
import {deleteData} from '../action/DataAction';
import ViewNote from './ViewNote';

const DataList = props => {
  const [showView, setShowView] = useState(false);
  console.log(props);
  const {title, note, createdAt, reminderDate, reminderTime} = props.item;
  return (
    <View style={styles.cardsContainer}>
      <View
        style={[
          styles.cardInfo,
          {backgroundColor: props.index % 2 === 0 ? '#78e08f' : '#b8e994'},
        ]}>
        <Text style={{fontSize: 18}}>{title}</Text>
        <Text style={{fontSize: 14}}>Created: {createdAt}</Text>
        {reminderDate !== '' || reminderTime !== '' ? (
          <Text>
            Reminder: {reminderDate} {reminderTime}
          </Text>
        ) : null}
      </View>
      <View
        style={{
          flex: 1,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-evenly',
        }}>
        <TouchableOpacity onPress={() => props.deleteData(props.index)}>
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
    // backgroundColor: '#78e08f',
    justifyContent: 'space-evenly',
    paddingLeft: 20,
    borderTopLeftRadius: 40,
    borderBottomLeftRadius: 40,
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
  },
});

{
  /* <ViewNote
title={title}
note={note}
setShowView={setShowView}
showView={showView}
/> */
}

const mapStateToProps = state => {
  return {
    add: state.add,
  };
};

export default connect(
  null,
  {deleteData},
)(DataList);
