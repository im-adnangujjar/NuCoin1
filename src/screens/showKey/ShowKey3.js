import { StyleSheet, Text, View, ScrollView, SafeAreaView, Image, TextInput } from 'react-native'
import React from 'react'
import { styles } from './ShowKey3Style'
import Header from '../../compnent/header/Header'
import Button from '../../compnent/button/Button'

const ShowKey3 = ({ navigation }) => {
    return (
        <ScrollView style={styles.container} >
            <SafeAreaView />
            <View style={styles.subContainer}>
                <Header nav={navigation} />
                <View style={styles.flex}>
                    <Text style={styles.title}>Enter the OTP you
                        recieved in your email</Text>
                    <Text style={styles.numbers}>02. <Text style={styles.numbers1}>02</Text></Text>
                </View>
                <TextInput style={styles.input} placeholder='Enter OTP code' />
                <Text style={styles.descripation}>Didn’t recieved the code? Send Again</Text>
                <View style={styles.button}>
                    <Button onPress={() => navigation.navigate('DashBoard')} text='Close' color='black' bgColor='white' width='45%' />
                    <Button onPress={() => navigation.navigate('ShowKey4')} text='Proceed' width='45%' />
                </View>
            </View>
        </ScrollView>
    )
}
export default ShowKey3
