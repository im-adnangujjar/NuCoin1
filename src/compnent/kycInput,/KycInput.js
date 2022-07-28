import { StyleSheet, Text, View,TextInput } from 'react-native'
import React from 'react'
import {styles} from './KycInputStyle'

const KycInput = ({kycData}) => {
  return (
    <View>
      <TextInput style={[styles.input, styles.inputText]} placeholder={kycData.title} placeholderTextColor={'black'}/>
    </View>
  )
}

export default KycInput
