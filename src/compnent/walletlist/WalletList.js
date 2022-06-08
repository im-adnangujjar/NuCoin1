import { StyleSheet, Text, View,Image } from 'react-native'
import React from 'react'
import close from '../../assets/icons/close_icon.png'
import { styles } from './WalletListStyle'

const walletList = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.list}>walletList</Text>
      <Image  source={close} />
    </View>
  )
}

export default walletList
