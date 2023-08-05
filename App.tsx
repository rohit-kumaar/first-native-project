import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const Tab = createBottomTabNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Login" component={Login} />
        <Tab.Screen name="Sign up" component={SignUp} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const Login = (props: any) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Login</Text>
      {/* <Button title="Login" onPress={() => props.navigation.navigate('Home')} /> */}
    </View>
  );
};

const SignUp = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Sign up</Text>
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
