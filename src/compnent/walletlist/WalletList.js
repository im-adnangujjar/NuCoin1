import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import close from '../../assets/icons/close_icon.png'
import { styles } from './WalletListStyle'

const walletList = ({nav}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.list}>walletList</Text>
      <TouchableOpacity onPress={()=>nav.navigate("DashBoard")}>
        <Image source={close} />
      </TouchableOpacity>
    </View>
  )
}

export default walletList
