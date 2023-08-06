import React, {useEffect, useState} from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';

export default function App() {
  const [data, setData] = useState([]);

  const API_URL = 'https://jsonplaceholder.typicode.com/users';

  async function apiData() {
    let res = await fetch(API_URL);
    res = await res.json();
    setData(res);
  }

  useEffect(() => {
    apiData();
  }, []);

  return (
    <ScrollView style={styles.container}>
      {data.length ? (
        data.map(user => (
          <View style={styles.user}>
            <Text>User ID : {user.id}</Text>
            <Text>User Name : {user.name}</Text>
            <Text>User Email : {user.email}</Text>
          </View>
        ))
      ) : (
        <Text>No Data </Text>
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 15,
    marginVertical: 20,
  },

  user: {
    paddingVertical: 10,
  },
});
