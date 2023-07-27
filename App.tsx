import React, {useEffect, useState} from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';

export default function App() {
  const [Toggle, setToggle] = useState(true);

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Component Did Update</Text>
      <Button
        title={`Toggle component is : ${Toggle ? 'Visible' : 'Hidden'}`}
        onPress={() => setToggle(!Toggle)}
      />

      {Toggle ? <User /> : null}
    </View>
  );
}

const User = () => {
  const timer = setInterval(() => {
    console.warn('Set Interval Is Running');
  }, 3000);

  useEffect(() => {
    return () => clearInterval(timer);
  });

  return (
    <View style={styles.userComp}>
      <Text style={styles.userCompText}>User Component</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: 'plum',
  },

  header: {
    marginBottom: 20,
    fontSize: 30,
    textAlign: 'center',
    textTransform: 'uppercase',
    textDecorationLine: 'underline',
  },

  userComp: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 20,
  },

  userCompText: {
    fontSize: 20,
  },
});
