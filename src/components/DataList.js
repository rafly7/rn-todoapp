import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {connect} from 'react-redux';
import {addData, deleteData} from '../action/DataAction';

const screenHeight = Math.round(Dimensions.get('screen').height);
const screenWidth = Math.round(Dimensions.get('screen').width);
const DataList = props => {
  console.log(screenWidth);
  //     console.log(props);
  //   return (
  //     <View>
  //       {typeof props.data === undefined ? (
  //         <Text>hello</Text>
  //       ) : (
  //         <Text>world</Text>
  //       )}
  //     </View>
  //   );
  console.log(props);
  return props.add.map((key, index) => {
    return (
      <View style={styles.cardsContainer}>
        <View
          style={{
            flex: 3,
            backgroundColor: '#74b9ff',
            justifyContent: 'space-evenly',
            paddingLeft: 20,
          }}>
          <Text style={{fontSize: 18}}>Name: {key.name}</Text>
          <Text style={{fontSize: 18}}>Address: {key.address}</Text>
        </View>
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
          <TouchableOpacity onPress={() => props.deleteData(index)}>
            <FontAwesome5 name="trash-alt" size={40} color="#d63031" />
          </TouchableOpacity>
        </View>
      </View>
    );
  });
};

const styles = StyleSheet.create({
  cardsContainer: {
    flex: 1,
    height: 90,
    backgroundColor: 'white',
    borderRadius: 5,
    marginBottom: 15,
    flexDirection: 'row',
  },
});

const mapStateToProps = state => {
  return {
    add: state.add,
  };
};

export default connect(
  mapStateToProps,
  {deleteData},
)(DataList);
