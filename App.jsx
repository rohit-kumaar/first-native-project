import axios from 'axios';
import React, {useEffect, useState} from 'react';
import {
  FlatList,
  ScrollView,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
  Modal,
  Button,
  TextInput,
} from 'react-native';

export default function App() {
  const [data, setData] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedUser, setSelectedUser] = useState(undefined);

  const API_URL = 'http://10.0.2.2:3000/users';

  async function apiData() {
    let res = await fetch(API_URL);
    res = await res.json();
    setData(res);
  }

  useEffect(() => {
    apiData();
  }, []);

  const deleteUser = id => {
    axios
      .delete(`${API_URL}/${id}`)
      .then(() => {
        apiData();
      })
      .catch(err => {
        console.warn(err);
      });
  };

  const updateUser = userData => {
    setShowModal(true);
    setSelectedUser(userData);
  };

  return (
    <ScrollView style={styles.container}>
      {data.length ? (
        <FlatList
          data={data}
          renderItem={({item}) => (
            <View style={styles.textWrapper}>
              <Text>User ID : {item.id}</Text>
              <Text>User Name : {item.name}</Text>
              <Text>User Email : {item.email}</Text>

              <TouchableHighlight>
                <Text
                  style={[styles.btn, styles.success]}
                  onPress={() => updateUser(item)}>
                  Update
                </Text>
              </TouchableHighlight>

              <TouchableHighlight>
                <Text
                  style={[styles.btn, styles.danger]}
                  onPress={() => deleteUser(item.id)}>
                  Delete
                </Text>
              </TouchableHighlight>
            </View>
          )}
        />
      ) : (
        <Text>No Data Found </Text>
      )}

      <Modal transparent={true} visible={showModal} animationType="slide">
        <UserModal setShowModal={setShowModal} selectedUser={selectedUser} />
      </Modal>
    </ScrollView>
  );
}

function UserModal(props) {
  // console.warn(props.selectedUser);
  const [name, setName] = useState(undefined);
  const [email, setEmail] = useState(undefined);

  useEffect(() => {
    if (props.selectedUser) {
      setName(props.selectedUser.name);
      setEmail(props.selectedUser.email);
    }
  }, [props.selectedUser]);

  return (
    <View style={styles.modalWrapper}>
      <View style={styles.modalContent}>
        <Text>Modal Content</Text>

        <TextInput style={styles.inputText} value={name} />
        <TextInput style={styles.inputText} value={email} />

        <View style={{flexDirection: 'row', gap: 10}}>
          <Button title="Update" />
          <Button title="Close" onPress={() => props.setShowModal(false)} />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 15,
    marginVertical: 20,
  },

  user: {
    paddingVertical: 10,
  },

  textWrapper: {
    padding: 10,
    marginBottom: 10,
    fontSize: 20,
    backgroundColor: '#FFB6C1',
    color: 'white',
  },

  btnWrapper: {
    flexDirection: 'row',
  },

  btn: {
    paddingVertical: 8,
    textAlign: 'center',
    fontSize: 20,
    color: 'white',
    borderRadius: 10,
    margin: 10,
    shadowColor: 'black',
    elevation: 10,
  },

  success: {
    backgroundColor: '#198754',
  },

  danger: {
    backgroundColor: '#dc3545',
  },

  modalWrapper: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  modalContent: {
    alignItems: 'center',
    gap: 10,
    paddingVertical: 40,
    paddingHorizontal: 20,
    borderRadius: 10,
    backgroundColor: '#D4E6F1',
    shadowColor: 'black',
    elevation: 5,
  },

  inputText: {
    width: 300,
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});
