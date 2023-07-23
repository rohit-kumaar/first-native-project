import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={[styles.box, styles.box_1]}>
        <Text style={styles.box_content}>01</Text>
      </View>

      <View style={[styles.box, styles.box_2]}>
        <Text style={styles.box_content}>02</Text>
      </View>

      <View style={[styles.box, styles.box_3]}>
        <Text style={styles.box_content}>03</Text>
      </View>

      <View style={[styles.box, styles.box_1]}>
        <Text style={styles.box_content}>04</Text>
      </View>

      <View style={[styles.box, styles.box_2]}>
        <Text style={styles.box_content}>05</Text>
      </View>

      <View style={[styles.box, styles.box_3]}>
        <Text style={styles.box_content}>06</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },

  box: {
    // flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: '50%',
    height: 200,
  },

  box_1: {
    backgroundColor: '#2A9D8F',
  },

  box_2: {
    backgroundColor: '#E9C46A',
  },

  box_3: {
    backgroundColor: '#F4A261',
  },

  box_content: {
    fontWeight: '600',
    fontSize: 30,
  },
});
