import React from 'react';
import {Modal, View, TouchableOpacity} from 'react-native';
import {TextInput} from 'react-native-paper';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';

const ViewNote = props => {
  return (
    <Modal
      animationType="fade"
      visible={props.showView}
      hardwareAccelerated={true}>
      <View style={{flex: 1, marginTop: 20, marginRight: 20}}>
        <View
          style={{
            alignItems: 'flex-end',
            marginBottom: 10,
          }}>
          <View style={{flexDirection: 'row'}}>
            <TouchableOpacity
              style={{paddingRight: 20}}
              onPress={() => props.setShowView(false)}>
              <Feather name="delete" size={25} color="#eb2f06" />
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

export default ViewNote;
