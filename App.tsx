import React from 'react';
import {SectionList, StyleSheet, Text, View} from 'react-native';

const users = [
  {
    id: 1,
    name: 'Rohit Kumar',
    data: ['Hamirpur', 'EEE', 'IT'],
  },
  {
    id: 2,
    name: 'Bibhu Prasad',
    data: ['Koelnagar', 'EEE', 'IT'],
  },
  {
    id: 3,
    name: 'Lalit Kumar',
    data: ['Sec-19', 'EEE', 'IT'],
  },
];

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Section List</Text>

      <SectionList
        sections={users}
        renderItem={({item}) => (
          <View style={styles.user_wrapper}>
            <Text>{item}</Text>
          </View>
        )}
        renderSectionHeader={({section: {name}}) => (
          <Text style={styles.title}>{name}</Text>
        )}
      />
    </View>
  );
}

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
