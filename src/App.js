import React, {useState} from 'react';
import {View, StyleSheet, Text, ScrollView} from 'react-native';
import {FloatingIconButton, FormInput} from './components/FloatingIconButton';
let arrs = [];
const App = () => {
  const [data, setData] = useState({
    personal_data: [],
    isShow: false,
    name: '',
    address: '',
  });

  const isShowModal = () => {
    setData({
      ...data,
      isShow: !data.isShow,
    });
  };

  const handleChangeName = val => {
    setData({
      ...data,
      name: val,
    });
  };

  const handleChangeAddress = val => {
    setData({
      ...data,
      address: val,
    });
  };

  const isShow = () => {
    return data.isShow;
  };

  // console.log(personalData);
  // console.log(data.name);
  // console.log(data.address);
  // console.log(arrs);
  // console.log(submitData);
  let arr = [
    {name: 'rafly', address: 'Bip'},
    {name: 'rafly', address: 'Bip'},
    {name: 'rafly', address: 'Bip'},
    {name: 'rafly', address: 'Bip'},
    {name: 'rafly', address: 'Bip'},
    {name: 'rafly', address: 'Bip'},
  ];
  let personalDatas = arr.map(key => {
    return (
      <View
        style={{
          flex: 1,
          height: 90,
          backgroundColor: 'white',
          borderRadius: 5,
          marginBottom: 15,
          justifyContent: 'space-evenly',
        }}>
        <Text style={{fontSize: 18}}>Name: {key.name}</Text>
        <Text style={{fontSize: 18}}>Address: {key.address}</Text>
      </View>
    );
  });

  const submitData = () => {
    arrs.push({name: data.name, address: data.address});
    setData({
      ...data,
      personal_data: data.personal_data.push({
        name: 'rafly',
        address: 'Bip',
      }),
      name: '',
      address: '',
      isShow: !data.isShow,
    });
  };
  console.log(data.name);
  console.log(data.address);
  // console.log(arrs);
  console.log(data.personal_data);
  return (
    <View style={styles.mainContainer}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Todo List</Text>
        <Text style={styles.headerText}>App</Text>
      </View>
      <View style={styles.contentContainer}>
        <ScrollView>{personalDatas}</ScrollView>
        <View style={{flex: 1}}>
          <FormInput
            isShow={isShow}
            submitData={submitData}
            handleChangeName={handleChangeName}
            handleChangeAddress={handleChangeAddress}
          />
          <FloatingIconButton isShowModal={isShowModal} />
        </View>
        {/* <FloatingIconButton submitData={submitData} /> */}
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
