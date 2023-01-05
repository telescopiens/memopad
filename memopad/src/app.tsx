import React from 'react';
import { StatusBar } from 'expo-status-bar';
import Navigations from './navs';
import { ThemeProvider } from '@shopify/restyle'
import { NavigationContainer } from '@react-navigation/native'


const App = () => {
  return (
    <NavigationContainer>
      <Navigations />
      <StatusBar />
    </NavigationContainer>
  )
}

export default App

