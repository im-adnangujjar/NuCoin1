import { StyleSheet, Text, View, Image, SafeAreaView, ScrollView, TextInput } from 'react-native'
import { styles } from './CoinAStyle'
import React from 'react'
import Header from '../../compnent/header/Header'
import block from '../../assets/images/Block2.png'
import Button from '../../compnent/button/Button'


const CoinA = () => {
  return (
    <ScrollView style={styles.mainContainer}>
      <SafeAreaView />
      <View style={styles.subContainer}>
        <Header />
        <View>
          <Text>Set Password</Text>
          <Text>02.03</Text>
        </View>
        <View style={styles.image}>
          <Image source={block}/>
        </View>
        <TextInput style={styles.input}  placeholder='Enter password'/>
        <View style={styles.button}>
        <Button text='Cancel' width="45%"/>
        <Button  text='tarancfer' width="45%"/>
        </View>
        
      </View>
    </ScrollView>


  )
}

export default CoinA
