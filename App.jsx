import React, {useEffect, useState} from 'react';
import {
  Button,
  FlatList,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';

export default function App() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const API_URL = 'http://10.0.2.2:3000/users';

  async function postData() {
    let res = await fetch(API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({name, email}),
    });

    res = await res.json();
    if (res) console.warn('User is created');
  }

  const handleSubmit = () => {
    postData();
  };

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Enter Name"
        name={name}
        onChangeText={text => setName(text)}
      />
      <TextInput
        placeholder="Enter Email"
        name={email}
        onChangeText={text => setEmail(text)}
      />
      <Button title="Create User" onPress={handleSubmit} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 15,
    marginVertical: 20,
  },
});
