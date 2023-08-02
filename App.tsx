import React from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Pressable
        onPress={() => console.warn('On Press Clicked')}
        onLongPress={() => console.warn('On Long Press Clicked')}
        // onPressIn={() => console.warn('On Press In Clicked')}
        // onPressOut={() => console.warn('On Press Out Clicked')}
      >
        <Text style={styles.pressableBtn}>Button</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },

  pressableBtn: {
    paddingVertical: 10,
    borderRadius: 4,
    backgroundColor: '#1F1F1F',
    color: '#ffffff',
    textAlign: 'center',
  },
});
