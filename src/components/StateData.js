import React from 'react';
import {View, ScrollView, Text} from 'react-native';
import {connect} from 'react-redux';
import DataList from './DataList';

const StateData = props => {
  if (props.add.length > 0) {
    return (
      <ScrollView>
        <DataList />
      </ScrollView>
    );
  } else {
    return (
      <View style={{flex: 1, justifyContent: 'flex-end', alignItems: 'center'}}>
        <Text style={{fontSize: 15}}>Empty Note</Text>
      </View>
    );
  }
};
const mapStateToProps = state => {
  return {
    add: state.add,
  };
};

export default connect(mapStateToProps)(StateData);
