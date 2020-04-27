/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import 'react-native-gesture-handler';
import React from 'react';
import {
 StatusBar,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Container from './src/navigator/stack';


const App: () => React$Node = () => {
  return (
    <NavigationContainer>
      <StatusBar barStyle="dark-content" backgroundColor={'purple'} />
      <Container/>
    </NavigationContainer>
  );
};

export default App;
