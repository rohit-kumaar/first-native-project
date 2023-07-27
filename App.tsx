import React from 'react';
import {Image, ImageBackground, StyleSheet, Text, View} from 'react-native';
const myImg = require('./assets/rohit.jpeg');

export default function App() {
  return (
    <View style={styles.container}>
      {/* <Image source={myImg} style={styles.myImg} />
      <Image source={{uri: 'https://picsum.photos/300'}} style={styles.myImg} /> */}

      <ImageBackground source={myImg} style={{flex: 1}}>
        <Text>Rohit Kumar</Text>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: 'plum',
  },

  myImg: {
    width: 300,
    height: 300,
  },
});
