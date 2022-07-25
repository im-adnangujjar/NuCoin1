import { StyleSheet, Text, View, ScrollView, SafeAreaView, Image } from 'react-native'
import React from 'react'
import { styles } from './LastWalletStyle'
import wallet from '../../assets/images/wallet.png'
import Button from '../../compnent/button/Button'
import Header from '../../compnent/header/Header'
import logo from '../../assets/images/walletlogo.png'



const LastWallet = ({navigation}) => {
    return (
        <ScrollView style={styles.container} >
            <SafeAreaView />
            <View style={styles.subContainer}>
              <Header logo={logo} nav={navigation}/>

                <Text style={styles.text}>Congratulation</Text>
                <View style={styles.image_center}>
                    <Image source={wallet} />
                </View>
                <Text style={styles.title}>Your wallet with the name </Text>
                <Text style={styles.title}><Text style={styles.jone}>Jhon Doe</Text> is created successfully</Text>
                <View style={styles.button}>
                <Button onPress={()=> navigation.navigate('DashBoard')} text='close' width={269}/>

                </View>

            </View>
        </ScrollView>
    )
}

export default LastWallet
