import React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Login from './Pages/Login/index';
import Registrar from './Pages/Register/index';
import App from './Pages/App/index';


const Stack = createNativeStackNavigator();

const index = () => {
  return (
        <NavigationContainer>
        <Stack.Navigator initialRouteName="Login">
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Registrar" component={Registrar} />
            <Stack.Screen name="App" component={App} />
        </Stack.Navigator>
        </NavigationContainer>
  )
}

export default index