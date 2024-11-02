import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LogInScreen from './LogInScreen'; // Ensure the correct path to LogInScreen
import SignUpScreen from './SignUpScreen'; // Ensure the correct path to SignUpScreen
import SplashScreen from './SplashScreenView';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SplashScreenView">
        <Stack.Screen name="SplashScreenView" component={SplashScreen} />
        <Stack.Screen name="LogIn" component={LogInScreen} />
        <Stack.Screen name="SignUp" component={SignUpScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
