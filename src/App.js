import React from 'react';
import {View, StyleSheet, Text, ScrollView} from 'react-native';
import FloatingIconButton from './components/FloatingIconButton';
let num = new Array(4);
function Texts() {
  let arrs = Array(20).map(function() {
    return 'Hello';
  });
  return <Text>Hello</Text>;
}

const App = () => {
  console.log(Texts());
  return (
    <View style={styles.mainContainer}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Todo List</Text>
        <Text style={styles.headerText}>App</Text>
      </View>
      <View style={styles.contentContainer}>
        <ScrollView>
        </ScrollView>
        <FloatingIconButton />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: 'red',
  },
  header: {
    flex: 1,
    paddingHorizontal: 20,
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
  },
  contentContainer: {
    flex: 3,
    backgroundColor: 'green',
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
    padding: 20,
  },
});

export default App;
