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
      <Text style={styles.title}>Loop With Flat List</Text>
      <FlatList data={users} renderItem={({item}) => <User item={item} />} />
    </View>
  );
}

const User = (props: any) => {
  const item = props.item;

  return (
    <View style={styles.user_wrapper}>
      <Text style={styles.text}>{item.name}</Text>
      <Text style={styles.text}>{item.email}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 15,
  },

  user_wrapper: {
    flexDirection: 'row',
    gap: 10,
  },

  title: {
    fontSize: 30,
    marginBottom: 15,
  },

  text: {
    flex: 1,
    padding: 10,
    marginBottom: 10,
    fontSize: 20,
    backgroundColor: '#3F2B96',
    color: 'white',
  },
});
