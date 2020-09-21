import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import DoctorsPage from './src/pages/DoctorsPage';
import LoginPage from './src/pages/LoginPage';

export default function App() {
  return (
    <View>
      <DoctorsPage/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginLeft:20,
    marginRight:20
  },
});
