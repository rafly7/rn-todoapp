import React from 'react';
import {View, Text, FlatList, StyleSheet} from 'react-native';
import {connect} from 'react-redux';
import DataList from './DataList';

const StateData = props => {
  if (props.add.length > 0) {
    return (
      <FlatList
        data={props.add}
        renderItem={data => <DataList item={data.item} index={data.index} />}
      />
    );
  } else {
    return (
      <View style={styles.mainContainer}>
        <Text style={styles.textEmpty}>Empty Note</Text>
      </View>
    );
  }
};
const mapStateToProps = state => {
  return {
    add: state.add,
  };
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  textEmpty: {
    fontSize: 15,
  },
});

export default connect(mapStateToProps)(StateData);
