import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  Text,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import FloatingIconButton from './components/FloatingIconButton';
import FormInput from './components/FormInput';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {Provider} from 'react-redux';
import {createStore, combineReducers} from 'redux';
import FormReducer from './reducer/formInputReducer';
import IsShowReducer from './reducer/isShowReducer';
import AddDataReducer from './reducer/addDataReducer';

import StateData from '../src/components/StateData';

const reducers = combineReducers({
  val: FormReducer,
  show: IsShowReducer,
  add: AddDataReducer,
});

const store = createStore(reducers);
const App = () => {
  const [data, setData] = useState({
    personal_data: [],
    isShow: false,
    name: '',
    address: '',
  });

  let personalDatas = data.personal_data.map((key, index) => {
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
          <TouchableOpacity onPress={() => alert(1)}>
            <FontAwesome5 name="trash-alt" size={40} color="#d63031" />
          </TouchableOpacity>
        </View>
      </View>
    );
  });

  return (
    <Provider store={store}>
      <View style={styles.mainContainer}>
        <View style={styles.header}>
          <Text style={styles.headerText}>Todo List</Text>
          <Text style={styles.headerText}>App</Text>
        </View>
        <View style={styles.contentContainer}>
          {/* <ScrollView> */}
          {/* {personalDatas} */}
          {/* {personalDatas.length === 0 ? <EmptyData /> : personalDatas} */}
          {/* <DataList /> */}
          {/* {ListData(data.personal_data, deleteData)} */}
          {/* </ScrollView> */}
          {/* <View style={{flex: 1, alignItems: 'center'}}> */}
          {/* <Text>Hello</Text> */}
          {/* </View> */}
          <StateData />
          <View style={{flex: 0.9}}>
            <FormInput />
            <FloatingIconButton />
          </View>
          {/* <FloatingIconButton submitData={submitData} /> */}
        </View>
      </View>
    </Provider>
  );
};

const EmptyData = () => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text style={{fontSize: 14}}>Empty Data</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#2ecc71',
  },
  header: {
    flex: 0.5,
    paddingHorizontal: 20,
    justifyContent: 'flex-end',
    marginVertical: 40,
  },
  headerText: {
    fontSize: 25,
    fontWeight: 'bold',
    color: 'white',
  },
  contentContainer: {
    flex: 3,
    backgroundColor: '#3498db',
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
    padding: 20,
    justifyContent: 'center',
  },
  cardsContainer: {
    flex: 1,
    height: 90,
    backgroundColor: 'white',
    borderRadius: 5,
    marginBottom: 15,
    flexDirection: 'row',
  },
});

export default App;
