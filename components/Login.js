import {Button, StyleSheet, Text, View, TextInput} from 'react-native';
import {useState} from 'react';

export const Login = props => {
  const [name, setName] = useState('Rohit Kumar');
  const email = `${name}@gmail.com`;

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Login Page</Text>
      <TextInput
        style={styles.textInput}
        placeholder="Enter Your Name"
        onChangeText={name => setName(name)}
      />
      <Button
        title="Login"
        onPress={() => props.navigation.navigate('Home', {name, email})}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  text: {
    fontSize: 30,
  },

  textInput: {
    width: '70%',
    borderWidth: 1,
    borderColor: '#000000',
    marginVertical: 10,
    paddingHorizontal: 20,
  },
});
