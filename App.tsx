import {View, Text, StyleSheet, Button} from 'react-native';
import React, {useState} from 'react';

export default function App() {
  const [name, setName] = useState('Rohit Kumar');

  return (
    <View>
      <Text style={styles.name}> {name}</Text>
      <Button title="Press Here" onPress={() => setName('Ricky')} />
    </View>
  );
}

const styles = StyleSheet.create({
  name: {
    fontSize: 30,
    color: '#2A878F',
  },
});
