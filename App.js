import React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer , DefaultTheme  } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StyleSheet, Text, View } from 'react-native';
import DoctorsPage from './src/pages/DoctorsPage';
import LoginPage from './src/pages/LoginPage';

const Stack = createStackNavigator();

const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background:'white'
  },
};

export default function App() {
  return (
    <NavigationContainer theme={MyTheme} >
      <Stack.Navigator 
      
        initialRouteName="Login"
        screenOptions={{
          headerShown: false
        }}
      >
         <Stack.Screen name="Login" component={LoginPage} />
         <Stack.Screen name="Doctors" component={DoctorsPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    marginLeft:20,
    marginRight:20
  },
});
