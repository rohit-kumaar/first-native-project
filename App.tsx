import React, {useState} from 'react';
import {ActivityIndicator, Button, StyleSheet, Text, View} from 'react-native';

export default function App() {
  const [toggle, setToggle] = useState(true);

  const handleHide = () => {
    setToggle(false);
  };

  return (
    <View style={styles.container}>
      <ActivityIndicator size={100} color="#0A2A3A" animating={toggle} />
      <Button title="Hide Loader" onPress={handleHide} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
