import { StyleSheet, Text, View, ScrollView, Image, SafeAreaView, TextInput } from 'react-native'
import React from 'react'
import { styles } from './ShowKey4Style'
import Header from '../../compnent/header/Header'
import copy from '../../assets/icons/copy_icon.png'
import Button from '../../compnent/button/Button'
import LinearGradient from 'react-native-linear-gradient'
import logo from '../../assets/images/walletlogo.png'


const ShowKey4 = ({ navigation }) => {
    return (
        <ScrollView style={styles.container}>
            <SafeAreaView />
            <View style={styles.subContainer}>
                <Header logo={logo} nav={navigation} />
                <View style={styles.flex}>
                    <Text style={styles.title}>Enter the OTP you
                        recieved in your email</Text>
                    <Text style={styles.numbers}>02. <Text style={styles.numbers1}>03</Text></Text>
                </View>
                <TextInput style={styles.input} placeholder='252272' />
                    <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }} colors={['#8FA7FF','#FFFFFF']} style={styles.linearGradient}>
                        <Text style={styles.name}>
                            pipe, rush, chance, peel, bottom, apparatus,
                            chew, democratic, wash, make, chicken,
                            national</Text>
                    </LinearGradient>
                <View style={styles.align}>
                    <Text style={styles.text}>Copy to Clipboard</Text>
                    <Image source={copy} />
                </View>
                <Button  onPress={()=>navigation.navigate('DashBoard')}text='Close'  width='100%' />
            </View>
        </ScrollView>
    )
}

export default ShowKey4
