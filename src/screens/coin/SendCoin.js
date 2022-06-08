import { StyleSheet, Text, View, ScrollView, SafeAreaView, Image } from 'react-native'
import React from 'react'
import { styles } from './SendCoinStyle'
import Header from '../../compnent/header/Header'
import check from '../../assets/icons/check.png'
import logo from '../../assets/images/wallet.png'
import Button from '../../compnent/button/Button'

const SendCoin = () => {
    return (
        <ScrollView style={styles.mainContainer}>
            <SafeAreaView />
            <View style={styles.subContainer}>
                <Header />
                <View style={styles.flex}>
                    <Text style={styles.title}>Transaction Success</Text>
                    <View
                        style={styles.image_bg}><Image source={check} />
                    </View>
                </View>
                <View style={styles.image}><Image source={logo} /></View>
                <Text style={styles.transaction}>Your transaction hash</Text>
                <Text style={styles.text}>0tiewjiofj43rx023943xwq9er0890x30</Text>
                    <Text style={styles.text}>r09e09wx9090w39r890</Text>
           <View style={styles.button}><Button text='close' width='80%'/></View>
            </View>

        </ScrollView>
    )
}

export default SendCoin
