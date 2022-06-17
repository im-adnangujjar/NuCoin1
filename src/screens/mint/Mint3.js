import { StyleSheet, Text, View, SafeAreaView, ScrollView, Image } from 'react-native'
import React from 'react'
import { styles } from './Mint3Style'
import { data } from '../../constant/constant'
import Header from '../../compnent/header/Header'
import block from '../../assets/images/Block4.png'
import WalletButton from '../../compnent/walletButoon /WalletButton'
import Button from '../../compnent/button/Button'


const Mint3 = ({ navigation }) => {
  return (
    <ScrollView style={styles.container} >
      <SafeAreaView />
      <View style={styles.subContainer}>
        <Header nav={navigation} />
        <Text style={styles.title}>Confirm Mnemonic</Text>
        <View style={styles.imageCenter}>
          <View style={styles.imagBg}>
            <Image source={block} />
          </View>
        </View>
        <View style={styles.button_align}>
          {
            data.map((item, index) => {
              return (
                <WalletButton item={item} />
              )
            })
          }
        </View>
        <View style={styles.card}>
          <Text style={styles.text}>pipe rush chance peel bottom appararatus
            chew democratic wash make chicken national</Text>
        </View>
        <Button text='Load Mnemonic' width='100%' bgColor='#282B33' />
        <View style={styles.button}>
          <Button click={()=>navigation.goBack('Mint4')}text='Cancal' bgColor='white' color='black' width='45%' />
          <Button click={()=>navigation.navigate('Mint4')}text='Continue' width='45%' bgColor='#34DDDC' />
        </View>

      </View>
    </ScrollView>
  )
}
export default Mint3
