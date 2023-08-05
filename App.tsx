import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {Button, StyleSheet} from 'react-native';
import {Home} from './components/Home';
import {Login} from './components/Login';

const Stack = createNativeStackNavigator();

export default function App() {
  const menu = () => {
    console.warn('Menu Clicked');
  };

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: '#032030',
          },
          headerTintColor: '#ffffff',
        }}>
        <Stack.Screen
          name="Login"
          component={Login}
          options={{
            headerRight: () => <Button title="Menu" onPress={menu} />,
            title: 'Login',
          }}
        />
        <Stack.Screen name="Home" component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
