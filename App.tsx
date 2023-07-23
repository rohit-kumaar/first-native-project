import React from 'react';
import {FlatList, ScrollView, StyleSheet, Text, View} from 'react-native';

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
  {
    id: 11,
    name: 'Rohit Kumar',
    email: 'rohit@gmail.com',
  },
  {
    id: 12,
    name: 'Bibhu Prasad',
    email: 'bibhu@gmail.com',
  },
  {
    id: 13,
    name: 'Lalit Kumar',
    email: 'lalit@gmail.com',
  },
  {
    id: 21,
    name: 'Rohit Kumar',
    email: 'rohit@gmail.com',
  },
  {
    id: 22,
    name: 'Bibhu Prasad',
    email: 'bibhu@gmail.com',
  },
  {
    id: 23,
    name: 'Lalit Kumar',
    email: 'lalit@gmail.com',
  },
  {
    id: 31,
    name: 'Rohit Kumar',
    email: 'rohit@gmail.com',
  },
  {
    id: 32,
    name: 'Bibhu Prasad',
    email: 'bibhu@gmail.com',
  },
  {
    id: 33,
    name: 'Lalit Kumar',
    email: 'lalit@gmail.com',
  },
  {
    id: 41,
    name: 'Rohit Kumar',
    email: 'rohit@gmail.com',
  },
  {
    id: 42,
    name: 'Bibhu Prasad',
    email: 'bibhu@gmail.com',
  },
  {
    id: 43,
    name: 'Lalit Kumar',
    email: 'lalit@gmail.com',
  },
  {
    id: 51,
    name: 'Rohit Kumar',
    email: 'rohit@gmail.com',
  },
  {
    id: 52,
    name: 'Bibhu Prasad',
    email: 'bibhu@gmail.com',
  },
  {
    id: 53,
    name: 'Lalit Kumar',
    email: 'lalit@gmail.com',
  },
];

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Flat List</Text>
      <ScrollView>
        {users.map(item => {
          return <Text style={styles.text}>{item.name}</Text>;
        })}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 15,
  },

  title: {
    fontSize: 30,
    marginBottom: 15,
  },

  text: {
    padding: 10,
    marginBottom: 10,
    fontSize: 20,
    backgroundColor: '#FFB6C1',
    color: 'white',
  },
});
