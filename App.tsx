import React from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';

const users = [
  {
    id: 1,
    name: 'Rohit Kumar',
    email: 'rohit@gmail.com',
  },
  {
    id: 2,
    name: 'Bibhu Prasad',
    email: 'bibhu@gmail.com',
  },
  {
    id: 3,
    name: 'Lalit Kumar',
    email: 'lalit@gmail.com',
  },
];

export default function App() {
  return (
    <View>
      <Text style={styles.title}>Flat List</Text>
      <FlatList
        data={users}
        renderItem={({item}) => <Text>{item.name}</Text>}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 30,
  },
});
