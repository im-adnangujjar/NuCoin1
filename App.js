import { View } from 'react-native'
import React from 'react'
import Navigation from './src/navigation/Navigation'
import 'react-native-gesture-handler'

const App = () => {
  return (
    <View style={{flex:1}}>
     <Navigation />
    </View>
  )
}

export default App

