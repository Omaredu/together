  
import 'react-native-gesture-handler'
import AppLoading from 'expo-app-loading'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { useFonts } from 'expo-font'

import TGNavigator from './js/TGNavigator'

export default function App() {
  let [ fontsLoaded ] = useFonts({
    'poppins': require('./assets/fonts/Poppins-Regular.ttf'),
    'poppins-medium': require('./assets/fonts/Poppins-Medium.ttf'),
    'poppins-semibold': require('./assets/fonts/Poppins-SemiBold.ttf'),
    'poppins-bold': require('./assets/fonts/Poppins-Bold.ttf'),
  })

  if (!fontsLoaded) {
    return <AppLoading />
  } else {
    return (
      <NavigationContainer>
          <TGNavigator />
      </NavigationContainer>
    )
  }
}