import React from 'react';
import { Platform, ScrollView, StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <ScrollView style={styles.container}>
      <Text style={{fontSize: 40}}>Platform : {Platform.OS}</Text>

      {Platform.OS == 'android' ? (
        <View style={{backgroundColor: 'red', width: 100, height: 100}}></View>
      ) : (
        <View
          style={{backgroundColor: 'green', width: 200, height: 200}}></View>
      )}

      <Text style={styles.RN}>React Native</Text>
      <Text style={{fontSize: 20}}>{JSON.stringify(Platform)}</Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 30,
  },

  RN: {
    fontSize: 40,
    color: Platform.OS == 'android' ? 'red' : 'green',
  },
});
