import React, {useState} from 'react';
import {Button, Text, View} from 'react-native';

export default function App() {
  const [toggle, setToggle] = useState(true);

  return (
    <View>
      <Button
        title={`Toggle is : ${toggle ? 'Show' : 'Hide'}`}
        onPress={() => setToggle(!toggle)}
      />
      {toggle ? <User /> : null}
    </View>
  );
}

function User() {
  return <Text>User Component</Text>;
}
