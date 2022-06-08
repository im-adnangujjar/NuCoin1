import { StyleSheet, Text, View,Image ,SafeAreaView,ScrollView,TextInput} from 'react-native'
import React from 'react'
import {styles} from './CoinStyle'
import Header from '../../compnent/header/Header'
import block from '../../assets/images/Block1.png'
import Button from '../../compnent/button/Button'
const Coin = () => {
  return (
      <ScrollView>
        <SafeAreaView/>
        <View style={styles.subContainer}>
        <Header/>
        <Text>Send Coins</Text>
        <Text>0.1 0.3</Text>
        <View style={styles.image}>
        <Image source={block}/>
        </View>
        <TextInput style={styles.input}  placeholder='Enter Reciever Address'/>
        <TextInput style={styles.input}  placeholder='Enter Amount'/>
        <View style={styles.button}><Button text="cancal" width="45%"/>
        <Button text="Submit" width="45%"/>
        </View>
        </View>

  
    </ScrollView>
  )
}

export default Coin
