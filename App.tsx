import React, {useEffect, useState} from 'react';
import {Button, Text, View} from 'react-native';

export default function App() {
  const [count, setCount] = useState(0);
  const [data, setData] = useState(10);

  useEffect(() => {
    // console.warn('This useEffect will run when count is update');
  }, [count]);

  useEffect(() => {
    // console.warn('This useEffect will run when data is update');
  }, [data]);

  return (
    <View>
      <Text
        style={{fontSize: 30, textAlign: 'center', textTransform: 'uppercase'}}>
        Component Did Update
      </Text>

      <View>
        <Text>Print count : {count}</Text>
        <Button title="Update count" onPress={() => setCount(count + 1)} />
      </View>

      <View>
        <Text>Print data : {data}</Text>
        <Button title="Update count" onPress={() => setData(data + 1)} />
      </View>

      <View>
        <Text
          style={{
            fontSize: 30,
            textAlign: 'center',
            textTransform: 'uppercase',
          }}>
          Props Data
        </Text>
        <User info={{count, data}} />
      </View>
    </View>
  );
}

function User(props: any) {
  useEffect(() => {
    console.warn('This useEffect will run when count props is update');
  }, [props.info.count]);

  useEffect(() => {
    console.warn('This useEffect will run when data props is update');
  }, [props.info.data]);

  return (
    <View>
      <View>
        <Text>Print count : {props.info.count}</Text>
      </View>

      <View>
        <Text>Print data : {props.info.data}</Text>
      </View>
    </View>
  );
}
