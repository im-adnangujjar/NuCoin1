import { StyleSheet, Text, View, ScrollView, TextInput, SafeAreaView, Image } from 'react-native'
import React from 'react'
import { styles } from './ShowKeyStyle'
import Header from '../../compnent/header/Header'
import block from '../../assets/images/Block3.png'
import Button from '../../compnent/button/Button'
import eye from '../../assets/icons/eye.png'
import logo from '../../assets/images/walletlogo.png'
import GradientButton1 from '../../compnent/button/GradientButton1'


const ShowKey = ({navigation}) => {
    return (
        <ScrollView style={styles.container}>
            <SafeAreaView />
            <View style={styles.subContainer}>
                <Header logo={logo} nav={navigation} />
                <View style={styles.textFlex}>
                    <Text style={styles.title}>Show Key</Text>
                    <Text>01 . 03</Text>
                </View>
                <View style={styles.imageCenter}>
                    <View style={styles.imageBg}>
                        <Image source={block} />
                    </View>
                </View>
                <View>
                    <TextInput style={styles.input} placeholder="Enter Password" />
                    <Image  style={styles.image} source={eye} />
                </View>
                <View style={styles.button}>
                    <Button onPress={()=>navigation.navigate('DashBoard')} text='Cancel'  color='black' bgColor='white' width='45%' height={54} />
                    <GradientButton1 click={()=>navigation.navigate('ShowKey2')} text='Submit' width='45%' height={54} />
                </View>


            </View>
        </ScrollView>
    )
}

export default ShowKey
