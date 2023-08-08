import axios from 'axios';
import React, {useEffect, useState} from 'react';
import {
  FlatList,
  ScrollView,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
} from 'react-native';

export default function App() {
  const [data, setData] = useState([]);

  const API_URL = 'http://10.0.2.2:3000/users';

  async function apiData() {
    let res = await fetch(API_URL);
    res = await res.json();
    setData(res);
  }

  useEffect(() => {
    apiData();
  }, []);

  const deleteUser = id => {
    axios
      .delete(`${API_URL}/${id}`)
      .then(() => {
        apiData();
      })
      .catch(err => {
        console.warn(err);
      });
  };

  return (
    <ScrollView style={styles.container}>
      {data.length ? (
        <FlatList
          data={data}
          renderItem={({item}) => (
            <View style={styles.textWrapper}>
              <Text>User ID : {item.id}</Text>
              <Text>User Name : {item.name}</Text>
              <Text>User Email : {item.email}</Text>

              <TouchableHighlight>
                <Text style={[styles.btn, styles.success]}>Update</Text>
              </TouchableHighlight>
              <TouchableHighlight>
                <Text
                  style={[styles.btn, styles.danger]}
                  onPress={() => deleteUser(item.id)}>
                  Delete
                </Text>
              </TouchableHighlight>
            </View>
          )}
        />
      ) : (
        <Text>No Data Found </Text>
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 15,
    marginVertical: 20,
  },

  user: {
    paddingVertical: 10,
  },

  textWrapper: {
    padding: 10,
    marginBottom: 10,
    fontSize: 20,
    backgroundColor: '#FFB6C1',
    color: 'white',
  },

  btnWrapper: {
    flexDirection: 'row',
  },

  btn: {
    paddingVertical: 8,
    textAlign: 'center',
    fontSize: 20,
    color: 'white',
    borderRadius: 10,
    margin: 10,
    shadowColor: 'black',
    elevation: 10,
  },

  success: {
    backgroundColor: '#198754',
  },

  danger: {
    backgroundColor: '#dc3545',
  },
});
