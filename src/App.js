import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import FloatingIconButton from './components/FloatingIconButton';
// import FormInput from './components/FormInput';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import RootReducer from './store/RootStore';
import StateData from '../src/components/StateData';
import FormNote from './components/FormNote';

const store = createStore(RootReducer);
const App = () => {
  return (
    <Provider store={store}>
      <View style={styles.mainContainer}>
        <View style={styles.header}>
          <Text style={styles.headerText}>Note List</Text>
          <Text style={styles.headerText}>App</Text>
        </View>
        <View style={styles.contentContainer}>
          <StateData />
          <View style={styles.buttonToForm}>
            <FormNote />
            <FloatingIconButton />
          </View>
        </View>
      </View>
    </Provider>
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
    backgroundColor: 'white',
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
    padding: 20,
    justifyContent: 'center',
  },
  buttonToForm: {
    flex: 0.9,
  },
});

export default App;
