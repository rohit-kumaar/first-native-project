import {View, Text, Button, StyleSheet} from 'react-native';
import React, {useEffect, useState} from 'react';

export default function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.warn(`This useEffect "ComponentDidMount" only once`);
  }, []);

  return (
    <View>
      <Text style={styles.text}>{count}</Text>
      <Button title="update count" onPress={() => setCount(count + 1)} />
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
    marginVertical: 10,
    textAlign: 'center',
  },
});
