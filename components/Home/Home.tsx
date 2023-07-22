import {View, Text, StyleSheet} from 'react-native';
import React from 'react';

export default function Home(props: any) {
  return (
    <View>
      <Text style={styles.home}>{props.name}</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  home: {
    fontSize: 30,
    color: '#9B4F6A',
  },
});
