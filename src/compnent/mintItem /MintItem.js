import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { styles } from './MintItemStyle'

const MintItem = ({mintData}) => {
  return (
    <View style={styles.bgColor} >
    <Text style={styles.title}> {mintData.title}</Text>
    <Text>{mintData.text}</Text>
    </View>
  )
}

export default MintItem
