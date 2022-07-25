import { StyleSheet, Text, View, SafeAreaView, ScrollView, Image, TextInput } from 'react-native'
import React from 'react'
import { styles } from './Mint2Style'
import Header from '../../compnent/header/Header'
import block from '../../assets/images/Block4.png'
import Button from '../../compnent/button/Button'
import { mintData, numbers } from '../../constant/constant'
import MintItem1 from '../../compnent/mintItem /MintItem1'
import logo from '../../assets/images/walletlogo.png'


const Mint2 = ({ navigation }) => {
    return (
        <ScrollView style={styles.container} >
            <SafeAreaView />
            <View style={styles.subContainer}>
                <Header logo={logo} nav={navigation} />
                <Text style={styles.title}>Confirm Mnemonic</Text>
                <View style={styles.imageCenter}>
                    <View style={styles.imagBg}>
                        <Image source={block} />
                    </View>
                </View>
                <View style={styles.button_align}>
                    {
                        numbers.map((item) => {
                            return <MintItem1 numbers={item} />
                        })
                    }
                </View>
                <TextInput style={styles.input} placeholder='Enter your Mnemonic' />
                {/* {
                    numbers.map((item ,index)=>{
                       return <MintItem1/>
                    })
                } */}

                <Button text='Load Mnemonic' width='100%' bgColor='#282B33' />
                <View style={styles.button}>
                    <Button onPress={() => navigation.goBack('Mint3')} text='Cancal' bgColor='white' color='black' width='45%' />
                    <Button onPress={() => navigation.navigate('Mint3')} text='Continue' width='45%' bgColor='#34DDDC' />
                </View>
            </View>
        </ScrollView>
    )
}

export default Mint2
