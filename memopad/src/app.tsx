import React from 'react';
import { StatusBar } from 'expo-status-bar';
import Navigations from './navs';
import { ThemeProvider } from '@shopify/restyle'
import { useAtom } from 'jotai'
import { activeThemeAtom } from './states/theme'

import { NavigationContainer } from '@react-navigation/native'


const App = () => {
  const [activeTheme] = useAtom(activeThemeAtom)
  return (
    <NavigationContainer>
      <ThemeProvider theme={activeTheme}>
        <Navigations />
        <StatusBar />
      </ThemeProvider>
    </NavigationContainer>
  )
}

export default App

