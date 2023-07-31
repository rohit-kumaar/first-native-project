import React from 'react';
import {StyleSheet, Text, TouchableHighlight, View} from 'react-native';

export default function App() {
  return (
    <TouchableHighlight>
      <Text style={styles.primary}>Primary</Text>
    </TouchableHighlight>
  );
}

const styles = StyleSheet.create({
  primary: {
    paddingVertical: 12,
    textAlign: 'center',
    fontSize: 24,
    backgroundColor: '#0B5ED7',
    color: 'white',
    borderRadius: 10,
    margin: 10,
    shadowColor: 'black',
    elevation: 10,
  },
});
