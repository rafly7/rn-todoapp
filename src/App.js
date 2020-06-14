import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  Text,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import {FloatingIconButton, FormInput} from './components/FloatingIconButton';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
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

  const deleteData = index => {
    console.log(index + 'index');
    data.personal_data.splice(index, 1);
    setData({
      ...data,
      personal_data: data.personal_data,
    });
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
  let personalDatas = data.personal_data.map((key, index) => {
    return (
      <View
        style={{
          flex: 1,
          height: 90,
          backgroundColor: 'white',
          borderRadius: 5,
          marginBottom: 15,
          flexDirection: 'row',
        }}>
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
          <TouchableOpacity onPress={() => deleteData(index)}>
            <FontAwesome5 name="trash-alt" size={40} color="#d63031" />
          </TouchableOpacity>
        </View>
      </View>
    );
  });
  const submitData = () => {
    switch (0) {
      case data.name.length:
      case data.address.length:
        data.personal_data.length - 1;
        break;
      default:
        data.personal_data.push({name: data.name, address: data.address});
    }
    setData({
      ...data,
      name: '',
      address: '',
      isShow: !data.isShow,
    });
  };

  return (
    <View style={styles.mainContainer}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Todo List</Text>
        <Text style={styles.headerText}>App</Text>
      </View>
      <View style={styles.contentContainer}>
        <ScrollView>
          {/* {personalDatas} */}
          {personalDatas.length === 0 ? <EmptyData /> : personalDatas}
        </ScrollView>
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
  },
});

export default App;
