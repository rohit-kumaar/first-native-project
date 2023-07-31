import {View, Text, StyleSheet} from 'react-native';
import React from 'react';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={[styles.child_1]}>
        <View style={[styles.child_4]}></View>
        <View style={[styles.child_5]}></View>
        <View style={[styles.child_6]}></View>
      </View>
      <View style={[styles.child, styles.child_2]}></View>
      <View style={[styles.child, styles.child_3]}></View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'plum',
  },

  child: {
    flex: 1,
  },

  child_1: {
    flex: 2,
    flexDirection: 'row',
    backgroundColor: '#008080',
  },

  child_2: {
    backgroundColor: '#FFA500',
  },

  child_3: {
    backgroundColor: '#0000FF',
  },

  child_4: {
    flex: 1,
    backgroundColor: '#3A4A7D',
  },

  child_5: {
    flex: 1,
    backgroundColor: '#F73859',
  },

  child_6: {
    flex: 1,
    backgroundColor: '#1e2b4f',
  },
});
