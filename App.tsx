import React from 'react';
import {Button, View} from 'react-native';

function App() {
  return (
    <View>
      <Button
        title="Press Here"
        onPress={() => console.warn('Function Called')}
        color={'#7F00FF'}
      />
    </View>
  );
}

export default App;
