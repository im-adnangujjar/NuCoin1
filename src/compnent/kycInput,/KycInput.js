import { StyleSheet, Text, View,TextInput } from 'react-native'
import React from 'react'
import {styles} from './KycInputStyle'

const KycInput = ({kycData}) => {
  return (
    <View>
      <TextInput style={styles.input} placeholder={kycData.title}/>
    </View>
  )
}

export default KycInput
