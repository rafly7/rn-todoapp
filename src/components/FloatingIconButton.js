import React from 'react';
import {TouchableOpacity, StyleSheet} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import {connect} from 'react-redux';
import isShowModal from '../action/IsShowAction';

const FloatingIconButton = props => {
  return (
    <TouchableOpacity
      testID="is-show-form"
      style={styles.iconButton}
      onPress={() => props.isShowModal()}>
      <Feather name="plus" color="#3498db" size={70} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  iconButton: {
    right: 0,
    bottom: 0,
    position: 'absolute',
    margin: 10,
    backgroundColor: '#74b9ff',
    borderRadius: 140,
    width: 70,
    height: 70,
  },
});
const mapStateToProps = state => {
  return {
    show: state.show,
  };
};

export default connect(
  mapStateToProps,
  {isShowModal},
)(FloatingIconButton);
