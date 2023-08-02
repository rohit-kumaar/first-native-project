import React, {useState} from 'react';
import {Button, StatusBar, StyleSheet, View} from 'react-native';

export default function () {
  const [hide, setHide] = useState(false);
  // const [barStyle, setBarStyle] = useState('default');

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#f2b632" barStyle="default" hidden={hide} />

      <View style={styles.btnWrapper}>
        <Button title="Toggle Status Bar" onPress={() => setHide(!hide)} />
        <Button
          title="Update Style"
          // onPress={() => setBarStyle('dark-content')}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },

  btnWrapper: {
    gap: 10,
  },
});
