import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {styles} from './MintItem1Style'

const MintItem1 = ({numbers}) => {
  return (
    <View style={styles.bgColor}>
    <Text style={styles.title}> {numbers.title}</Text>
    </View>
  )
}

export default MintItem1
