import {View, Text, StyleSheet, Button} from 'react-native';
import React, {useState} from 'react';
import Home from './components/Home/Home';

export default function App() {
  const [name, setName] = useState('Batman');
  return (
    <View>
      <Button title="Update Props" onPress={() => setName('Bruce Wayne')} />
      <Home name={name} />
    </View>
  );
}
