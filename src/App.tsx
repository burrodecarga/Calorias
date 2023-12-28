/* eslint-disable react-native/no-inline-styles */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import 'react-native-gesture-handler'
import React from 'react'
import {
  SafeAreaView,
} from 'react-native'
import { SafeAreaProvider, } from 'react-native-safe-area-context'
import Routes from 'Routes'




function App(): React.JSX.Element {

  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ flex: 1, }}>
        <Routes />
      </SafeAreaView>
    </SafeAreaProvider>
  )
}


export default App
