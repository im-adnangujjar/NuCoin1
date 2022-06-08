import { StyleSheet, Text, View, Image, ScrollView, SafeAreaView, } from 'react-native'
import React from 'react'
import { styles } from './walletStyle'
import WalletButton from '../../compnent/walletButoon /WalletButton'
import { data } from '../../constant/constant'
import copy from '../../assets/icons/copy_icon.png'
import Button from '../../compnent/button/Button'
import LinearGradient from 'react-native-linear-gradient';
import Header from '../../compnent/header/Header'
import warning from '../../assets/icons/warning.png'

export default function Wallet({ navigation }) {

  return (
    <ScrollView style={styles.container} >
      <SafeAreaView />

      <View style={styles.subContainer}>
        <Header/>
        <Text style={styles.title}>Create Wallet</Text>
        <LinearGradient start={{ x: 0, y: -1 }} end={{ x: 1, y: 1 }} colors={['#ECB8B8', '#FFFFFF']} style={styles.linearGradient}>
          <View  style={styles.bgColor}>
          <Image  source={warning} />

            <Text style={styles.descripation}>PLease copy down the mnemonic for you new account below. If you loose these mnemonics, you will risk loosing your coins (wealth). You will have to confirm the mnemonic on the text sceen</Text></View>
        </LinearGradient>
        <View style={styles.button_align}>
          {
            data.map((item, index) => {
              return <WalletButton key={index} item={item} />
            })
          }
        </View>
        <View style={styles.text_flex}>
          <Text styles={styles.copy}>Copy to Clipboard</Text>
          <Image style={styles.icon} source={copy} />
        </View>
        <View style={styles.bar}>
          <Button text='cancal'  color='black' bgColor=' #E5E5E5' width='45%' height={54} bgColor='white' />
          <Button click={() => navigation.navigate('Wallet3')} text='continue' width='45%' height={54}  />
        </View>
      </View>
    </ScrollView>
  )
}
