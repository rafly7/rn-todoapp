import React from 'react';
import {View, ScrollView, Text, FlatList} from 'react-native';
import {connect} from 'react-redux';
import DataList from './DataList';

const StateData = props => {
  if (props.add.length > 0) {
    // const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2})
    return (
      <FlatList
        data={props.add}
        renderItem={data => <DataList item={data.item} index={data.index} />}
      />
      // <ScrollView maximumZoomScale={150} minimumZoomScale={60}>
      //   <DataList />
      // </ScrollView>
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
