import { StyleSheet, Text, View, ScrollView, TextInput, Image } from 'react-native'
import React from 'react'
import { styles } from './MintStyle'
import { SafeAreaView } from 'react-native-safe-area-context'
import Header from '../../compnent/header/Header'
import eye from '../../assets/icons/eye.png'
import Button from '../../compnent/button/Button'

const Mint = ({ navigation }) => {
    return (
        <ScrollView style={styles.container}>
            <SafeAreaView />
            <View style={styles.subContainer}><Header nav={navigation} />
                <View style={styles.flex}>
                    <Text style={styles.password}>Set Password</Text>
                    <Text style={styles.numbers}> 01 . <Text style={styles.numbers1}>03</Text></Text>
                </View>
                <View >
                    <TextInput style={styles.input} placeholder='Enter password' />
                    <Image style={styles.icon} source={eye} />
                </View>
                <Text style={styles.text}>Reset Password</Text>
                <View style={styles.button}>
                    <Button text='Cancal' width='45%'bgColor='white' color='black'/>
                    <Button text='Mint' width='45%' bgColor='#34DDDC' color='black'/>
                </View>


            </View>

        </ScrollView>
    )
}

export default Mint
