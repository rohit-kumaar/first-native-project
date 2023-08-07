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
  const [nameError, setNameError] = useState(false);
  const [emailError, setEmailError] = useState(false);

  const API_URL = 'http://10.0.2.2:3000/users';

  async function postData() {
    !name ? setNameError(true) : setNameError(false);
    !email ? setEmailError(true) : setEmailError(false);

    if (!name || !email) {
      return false;
    }

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
      <View>
        <TextInput
          placeholder="Enter Name"
          name={name}
          onChangeText={text => setName(text)}
          style={styles.field}
        />
        {nameError ? (
          <Text style={styles.error}>Please enter a name</Text>
        ) : null}
      </View>

      <View>
        <TextInput
          placeholder="Enter Email"
          name={email}
          onChangeText={text => setEmail(text)}
          style={styles.field}
        />

        {emailError ? (
          <Text style={styles.error}>Please enter a valid email</Text>
        ) : null}
      </View>
      <Button title="Create User" onPress={handleSubmit} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    gap: 30,
    paddingHorizontal: 15,
    marginVertical: 20,
  },

  field: {
    paddingHorizontal: 10,
    borderColor: '#aaa',
    borderWidth: 1,
  },

  error: {
    color: 'red',
  },
});
