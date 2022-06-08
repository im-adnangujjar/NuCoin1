import { StyleSheet, Text, View, ScrollView, SafeAreaView, Image } from 'react-native'
import React from 'react'
import { styles } from './LastWalletStyle'
import wallet from '../../assets/images/wallet.png'
import Button from '../../compnent/button/Button'
import Header from '../../compnent/header/Header'


const LastWallet = ({navigation}) => {
    return (
        <ScrollView style={styles.container} >
            <SafeAreaView />
            <View style={styles.subContainer}>
              <Header/>

                <Text style={styles.text}>Congratulation</Text>
                <View style={styles.image_center}>
                    <Image source={wallet} />
                </View>
                <Text style={styles.title}>Your wallet with the name </Text>
                <Text style={styles.title}>Jhon Doe is created successfully</Text>
                <View style={styles.button}>
                <Button click={()=> navigation.navigate('DashBoard')} text='close' width={269}/>

                </View>

            </View>
        </ScrollView>
    )
}

export default LastWallet
