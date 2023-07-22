import {View, Text, StyleSheet, TextInput, Button} from 'react-native';
import React, {useState} from 'react';

export default function App() {
  const [name, setName] = useState('Rohit Kumar');

  return (
    <View>
      <Text style={styles.name}>Name : {name}</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter Your Name"
        onChangeText={value => setName(value)}
        value={name}
      />
      <Button title="Clear Input Field" onPress={() => setName('')} />
    </View>
  );
}

const styles = StyleSheet.create({
  name: {
    fontSize: 30,
    color: '#0e2431',
  },

  input: {
    padding: 15,
    borderColor: '#000000',
    borderWidth: 1,
    marginTop: 10,
    marginBottom: 10,
    fontSize: 20,
  },
});
