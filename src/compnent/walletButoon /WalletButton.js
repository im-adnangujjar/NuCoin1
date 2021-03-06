import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const WalletButton = ({ item }) => {

  const styles = StyleSheet.create({
    button: {
      backgroundColor: '#F3F2F3',
      width: '30%',
      height: 45,
      borderRadius: 10,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom: 11
    },
    text:{
      fontSize:14,
      fontFamily:'Poppins-Medium',
      fontWeight:'500',
      color:'black'
    }
  })
  return (
    <View style={styles.button}>
      <Text style={styles.text}>{item.title}</Text>
    </View>
  )
}

export default WalletButton

