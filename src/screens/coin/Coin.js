import { StyleSheet, Text, View, Image, SafeAreaView, ScrollView, TextInput } from 'react-native'
import React from 'react'
import { styles } from './CoinStyle'
import Header from '../../compnent/header/Header'
import block from '../../assets/images/Block1.png'
import Button from '../../compnent/button/Button'
import Navigation from '../../navigation/Navigation'
const Coin = ({navigation}) => {
  return (
    <ScrollView>
      <SafeAreaView />
      <View style={styles.subContainer}>
        <Header nav={navigation} />
        <Text>Send Coins</Text>
        <Text>0.1 0.3</Text>
        <View style={styles.image}>
          <Image source={block} />
        </View>
        <TextInput style={styles.input} placeholder='Enter Reciever Address' />
        <TextInput style={styles.input} placeholder='Enter Amount' />
        <View style={styles.button}><Button click={() => navigation.goBack('CoinA')} text="cancal" width="45%" color='black' bgColor='white' />

          <Button click={() => navigation.navigate('CoinA')} text="Submit" width="45%" />


        </View>
      </View>


    </ScrollView>
  )
}

export default Coin
