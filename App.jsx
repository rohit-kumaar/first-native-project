import React, {useRef} from 'react';
import {Button, StyleSheet, TextInput, View} from 'react-native';

export default function App() {
  const ref = useRef();

  const handleSubmit = () => {
    ref.current.focus();
    ref.current.setNativeProps({
      color: 'red',
    });
  };

  return (
    <View style={styles.container}>
      <TextInput style={styles.inputText} placeholder="Enter name" ref={ref} />
      <TextInput style={styles.inputText} placeholder="Enter email" />
      <Button title="Submit" onPress={handleSubmit} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 15,
    marginVertical: 20,
  },

  textWrapper: {
    padding: 10,
    marginBottom: 10,
    fontSize: 20,
    backgroundColor: '#FFB6C1',
    color: 'white',
  },

  inputText: {
    width: '100%',
    height: 40,
    marginVertical: 12,
    borderWidth: 1,
    padding: 10,
  },
});
