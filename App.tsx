import React from 'react';
import {Text, View} from 'react-native';
import Home from './components/Home/Home';

function App() {
  return (
    <View>
      <Text style={{color: 'red', fontSize: 30}}>App component</Text>
      <Home />
    </View>
  );
}

export default App;
