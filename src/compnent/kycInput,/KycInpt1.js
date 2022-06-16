import { StyleSheet, Text, View, TextInput } from 'react-native'
import React from 'react'
import { styles } from './KycInputStyle'

const KycInput1 = ({kycData1}) => {
  return (
    <View>
      <TextInput style={styles.input} placeholder={kycData1.title} />
    </View>
  )
}

export default KycInput1