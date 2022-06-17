import { StyleSheet, Text, View, SafeAreaView, ScrollView, Image, TextInput } from 'react-native'
import React from 'react'
import { styles } from './Mint2Style'
import Header from '../../compnent/header/Header'
import block from '../../assets/images/Block4.png'
import Button from '../../compnent/button/Button'
import { mintData } from '../../constant/constant'
import MintItem from '../../compnent/mintItem /MintItem'

const Mint2 = ({ navigation }) => {
    return (
        <ScrollView style={styles.container} >
            <SafeAreaView />
            <View style={styles.subContainer}>
                <Header nav={navigation} />
                <Text style={styles.title}>Confirm Mnemonic</Text>
                <View style={styles.imageCenter}>
                    <View style={styles.imagBg}>
                        <Image source={block} />
                    </View>
                </View>
                {
                    mintData.map((item) => {
                        <MintItem  mintData={item}/>
                    })
                }
                <TextInput style={styles.input} placeholder='Enter your Mnemonic' />
                <Button text='Load Mnemonic' width='100%' bgColor='#282B33' />
                <View style={styles.button}>
                    <Button click={()=>navigation.goBack('Mint3')}text='Cancal' bgColor='white' color='black' width='45%' />
                    <Button  click={()=>navigation.navigate('Mint3')}text='Continue' width='45%' bgColor='#34DDDC' />
                </View>
            </View>
        </ScrollView>
    )
}

export default Mint2
