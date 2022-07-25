import { StyleSheet, Text, View, ScrollView, SafeAreaView, Image, TextInput } from 'react-native'
import React from 'react'
import { styles } from './ShowKey3Style'
import Header from '../../compnent/header/Header'
import Button from '../../compnent/button/Button'
import logo from '../../assets/images/walletlogo.png'
import GradientButton1 from '../../compnent/button/GradientButton1'


const ShowKey3 = ({ navigation }) => {
    return (
        <ScrollView style={styles.container} >
            <SafeAreaView />
            <View style={styles.subContainer}>
                <Header logo={logo} nav={navigation} />
                <View style={styles.flex}>
                    <Text style={styles.title}>Enter the OTP you
                        recieved in your email</Text>
                    <Text style={styles.numbers}>02. <Text style={styles.numbers1}>02</Text></Text>
                </View>
                <TextInput style={styles.input} placeholder='Enter OTP code' />
                <Text style={styles.descripation}>Didn’t recieved the code? Send Again</Text>
                <View style={styles.button}>
                    <Button onPress={() => navigation.navigate('DashBoard')} text='Close' color='black' bgColor='white' width='45%' />
                    <GradientButton1 click={() => navigation.navigate('ShowKey4')} text='Proceed' width='45%' height={57}/>
                </View>
            </View>
        </ScrollView>
    )
}
export default ShowKey3
