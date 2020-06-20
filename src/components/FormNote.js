import React from 'react';
import {Modal, View, Text, TouchableHighlight, TextInput} from 'react-native';
import {connect} from 'react-redux';
import IsShowModal from '../action/IsShowAction';

const FormNote = props => {
  const {IsShowModal, show} = props;
  console.log(props);
  return (
    <Modal animationType="slide" visible={show} hardwareAccelerated={true}>
      <View style={{flex: 1, marginTop: 20, marginHorizontal: 20}}>
        <View
          style={{
            alignItems: 'flex-end',
            marginBottom: 10,
            backgroundColor: 'green',
          }}>
          <TouchableHighlight onPress={() => IsShowModal()}>
            <Text>SAVE</Text>
          </TouchableHighlight>
        </View>
        <View
          style={{flex: 1,backgroundColor: 'transparent', justifyContent: 'flex-start'}}>
          <Text style={{fontSize: 22}}>Project1</Text>
          <TextInput
            placeholder="Notes"
            numberOfLines={1000}
            style={{paddingLeft: 0, backgroundColor: 'green'}}
            multiline={true}
          />
        </View>
      </View>
    </Modal>
  );
};

const mapStateToProps = state => {
  return {
    show: state.show,
  };
};

export default connect(
  mapStateToProps,
  {IsShowModal},
)(FormNote);
