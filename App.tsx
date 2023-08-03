import React, {useState} from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';

export default function App() {
  const [toggle, setToggle] = useState(false);

  return (
    <View style={styles.container}>
      {toggle ? (
        <View style={styles.modalWrapper}>
          <View style={styles.modal}>
            <Text>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis
              odit exercitationem officia consequuntur adipisci quaerat dolorem
            </Text>

            <Button title="Close Modal" onPress={() => setToggle(false)} />
          </View>
        </View>
      ) : null}

      <Button title="Open Modal" onPress={() => setToggle(true)} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
  },

  modalWrapper: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
  },

  modal: {
    flexDirection: 'column',
    alignItems: 'center',
    gap: 20,
    width: 300,
    height: 300,
    paddingVertical: 50,
    paddingHorizontal: 10,
    borderRadius: 10,
    backgroundColor: 'white',
  },
});
