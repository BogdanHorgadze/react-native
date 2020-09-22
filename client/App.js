import React from 'react';
import { NavigationContainer , DefaultTheme  } from '@react-navigation/native';
import 'react-native-gesture-handler';
import { Provider } from 'react-redux'
import { createStore , applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

import rootReducer from './src/store/reducers/rootReducer'
import { createStackNavigator } from '@react-navigation/stack';
import { StyleSheet } from 'react-native';
import DoctorsPage from './src/pages/DoctorsPage';
import LoginPage from './src/pages/LoginPage';

const store = createStore(rootReducer,applyMiddleware(thunk))
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
    <Provider store={store}>
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
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    marginLeft:20,
    marginRight:20
  },
});
