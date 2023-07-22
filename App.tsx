import React, {useState} from 'react';
import {
  Button,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

export default function App() {
  const [user, setUser] = useState({
    name: '',
    email: '',
    password: '',
  });
  const [userData, setUserData] = useState(false);

  const handleChange = (name: any, value: any) => {
    setUser(prev => ({...prev, [name]: value}));
  };

  const resetFields = () => {
    setUserData(false);
    setUser({
      name: '',
      email: '',
      password: '',
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.name}>Form</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter Your Name"
        onChangeText={value => handleChange('name', value)}
        value={user.name}
      />
      <TextInput
        style={styles.input}
        placeholder="Enter Your Email"
        onChangeText={value => handleChange('email', value)}
        value={user.email}
      />
      <TextInput
        style={styles.input}
        placeholder="Enter Your Password"
        onChangeText={value => handleChange('password', value)}
        value={user.password}
        secureTextEntry={true}
      />

      <TouchableOpacity style={styles.buttonContainer}>
        <Button title="Submit" onPress={() => setUserData(true)} />
      </TouchableOpacity>

      <TouchableOpacity>
        <Button title="Clear" onPress={resetFields} />
      </TouchableOpacity>

      <View>
        {userData ? (
          <View>
            <Text style={styles.userData}>User Name : {user.name}</Text>
            <Text style={styles.userData}>User Email : {user.email}</Text>
            <Text style={styles.userData}>User Password : {user.password}</Text>
          </View>
        ) : null}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 'auto',
    paddingHorizontal: 15,
    marginHorizontal: 'auto',
  },

  name: {
    fontSize: 30,
    color: '#0e2431',
  },

  input: {
    padding: 15,
    borderColor: '#000000',
    borderWidth: 1,
    marginVertical: 10,
    fontSize: 20,
  },

  buttonContainer: {
    marginBottom: 10,
  },

  userData: {
    fontSize: 20,
  },
});
