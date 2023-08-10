import axios from 'axios';
import React, {useState} from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';

const API_URL = 'http://10.0.2.2:3000/users';
const API_URL_WITH_SEARCH_QUERY = `${API_URL}?q=`;

export default function App() {
  const [userData, setUserData] = useState([]);

  const searchUser = text => {
    axios
      .get(`${API_URL_WITH_SEARCH_QUERY}${text}`)
      .then(res => {
        setUserData(res.data);
      })
      .catch(err => {
        console.warn(err);
      });
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.inputText}
        onChangeText={text => searchUser(text)}
        placeholder="Search..."
      />

      {userData.length ? (
        userData.map(user => (
          <View key={user.id}>
            <Text style={styles.textWrapper}>{user.name}</Text>
          </View>
        ))
      ) : (
        <Text>No Data Available</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 15,
    marginVertical: 20,
  },

  textWrapper: {
    padding: 10,
    marginBottom: 10,
    fontSize: 20,
    backgroundColor: '#FFB6C1',
    color: 'white',
  },

  inputText: {
    width: '100%',
    height: 40,
    marginVertical: 12,
    borderWidth: 1,
    padding: 10,
  },
});
