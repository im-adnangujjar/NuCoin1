import { StyleSheet, Text, View, ScrollView, SafeAreaView, Image } from 'react-native'
import React from 'react'
import { styles } from './ShowKey2Style'
import Header from '../../compnent/header/Header'
import wallet from '../../assets/images/wallet.png'
import Button from '../../compnent/button/Button'
import Navigation from '../../navigation/Navigation'
import logo from '../../assets/images/walletlogo.png'
import GradientButton1 from '../../compnent/button/GradientButton1'


const ShowKey2 = ({navigation}) => {
    return (
        <ScrollView style={styles.container}>
            <SafeAreaView />
            <View style={styles.subContainer}>
                <Header logo={logo} nav={navigation} />
                <View style={styles.image}>
                    <Image style={styles.walletLogo} source={wallet} />
                </View>
                <View style={styles.flex}>
                    <Text style={styles.description}>Dear customer, for security reasons in protecting your private key, please click below to send an OTP (One Time Pin) to your email for which you will need to provide in the next screen.</Text>
                </View>
                <View style={styles.button}>
                    <Button onPress={()=>navigation.goBack()} text='Cancel' bgColor='#F3F3F3' color='black'  width='45%' />
                    <GradientButton1 click={()=>navigation.navigate('ShowKey3')}text='Proceed' width='45%' height={57}/>
                </View>

            </View>
        </ScrollView>
    )
}

export default ShowKey2
