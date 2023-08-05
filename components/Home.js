import {StyleSheet, Text, View} from 'react-native';

export const Home = props => {
  const {name, email} = props.route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Home Page</Text>
      <Text style={styles.text}>Name : {name}</Text>
      <Text style={styles.text}>Email : {email}</Text>
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
});
