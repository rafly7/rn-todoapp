import React from 'react';
import {
  Modal,
  View,
  Text,
  TouchableHighlight,
  TextInput as TextInputNative,
  TouchableOpacity,
} from 'react-native';
import {TextInput} from 'react-native-paper';
import {connect} from 'react-redux';
import IsShowModal from '../action/IsShowAction';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';

const FormNote = props => {
  const {IsShowModal, show} = props;
  return (
    <Modal animationType="slide" visible={show} hardwareAccelerated={true}>
      <View style={{flex: 1, marginTop: 20, marginRight: 20}}>
        <View
          style={{
            alignItems: 'flex-end',
            marginBottom: 10,
            // backgroundColor: 'green',
          }}>
          <TouchableOpacity onPress={() => IsShowModal()}>
            <Text style={{color: '#3498db'}}>SAVE</Text>
          </TouchableOpacity>
        </View>
        <View style={{flex: 1}}>
          <View style={{flexDirection: 'row', paddingLeft: 12}}>
            <FontAwesome name="tag" color="#2980b9" size={30} />
            <TextInput
              placeholder="Title"
              style={{
                backgroundColor: 'transparent',
                flex: 1,
                fontSize: 20,
                height: 30,
              }}
            />

            {/* <Text style={{fontSize: 22, paddingLeft: 11}}>Project1</Text> */}
          </View>
          <View
            style={{flexDirection: 'row', paddingLeft: 12, marginVertical: 10}}>
            <Feather name="calendar" color="#2980b9" size={25} />
            <TouchableOpacity style={{flex: 1}} onPress={() => alert(1)}>
              <TextInput
                placeholder="Reminder"
                editable={false}
                style={{
                  flex: 1,
                  height: 25,
                  fontSize: 20,
                  backgroundColor: 'transparent',
                }}
              />
            </TouchableOpacity>
          </View>
          <TextInput
            placeholder="Notes"
            numberOfLines={50}
            style={{backgroundColor: 'transparent'}}
            scrollEnabled={true}
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
