import React, {useState} from 'react';
import {Button, Modal, StyleSheet, Text, View} from 'react-native';

export default function App() {
  const [showModal, setShowModal] = useState(false);

  return (
    <View style={styles.container}>
      <Modal transparent={true} visible={showModal} animationType="slide">
        <View style={styles.modalWrapper}>
          <View style={styles.modalContent}>
            <Text>Modal Content</Text>
            <Button title="Close Modal" onPress={() => setShowModal(false)} />
          </View>
        </View>
      </Modal>

      <View style={styles.btnWrapper}>
        <Button title="Open Modal" onPress={() => setShowModal(true)} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  btnWrapper: {
    flex: 1,
    justifyContent: 'flex-end',
  },

  modal: {},
  modalWrapper: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  modalContent: {
    alignItems: 'center',
    gap: 10,
    padding: 40,
    borderRadius: 10,
    backgroundColor: '#D4E6F1',
    shadowColor: 'black',
  },
});
