import { StyleSheet, Text, View, Image, SafeAreaView, ScrollView, TextInput } from 'react-native'
import { styles } from './CoinAStyle'
import React from 'react'
import Header from '../../compnent/header/Header'
import block from '../../assets/images/Block2.png'
import Button from '../../compnent/button/Button'


const CoinA = ({ navigation }) => {
  return (
    <ScrollView style={styles.mainContainer}>
      <SafeAreaView />
      <View style={styles.subContainer}>
        <Header nav={navigation} />
        <View style={styles.flex}>
          <Text>Set Password</Text>
          <Text>02.03</Text>
        </View>
        <View style={styles.imageCenter}>
          <View style={styles.imageBg}>
            <View style={styles.image}>
              <Image source={block} />
            </View>
          </View>
        </View>
        <TextInput style={styles.input} placeholder='Enter password' />
        <View style={styles.button}>
          <Button click={() => navigation.goBack('SendCoin')} text='Cancel' width="45%" color='black' bgColor='white' />
          <Button click={() => navigation.navigate('SendCoin')} text='tarancfer' width="45%" />
        </View>
      </View>
    </ScrollView>


  )
}

export default CoinA
