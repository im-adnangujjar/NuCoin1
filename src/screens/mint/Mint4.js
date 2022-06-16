import { StyleSheet, Text, View, TextInput, Image } from 'react-native'
import React from 'react'
import { styles } from '../coin/CoinAStyle'
import Button from '../../compnent/button/Button'
import block from '../../assets/images/Block2.png'
import Header from '../../compnent/header/Header'
import eye from '../../assets/icons/eye.png'


const Mint4 = () => {
    return (
        <View style={styles.subContainer}>
            <Header />
            <View style={styles.flex}>
                <Text style={styles.password}>Set Password</Text>
                <Text style={styles.numbers}>02.<Text style={styles.numbers1}>03</Text></Text>
            </View>
            <View style={styles.imageCenter}>
                <View style={styles.imageBg}>
                    <View style={styles.image}>
                        <Image source={block} />
                    </View>
                </View>
            </View>
            <View>
                <TextInput style={styles.input} placeholder='Enter password' />
                <Image style={styles.icon} source={eye} />
            </View>
            <View style={styles.button}>
                <Button text='Cancel' width="45%" bgColor='white' color='black' />
                <Button text='continnu to Mint' width="45%" bgColor='#34DDDC' />
            </View>
        </View>
    )
}

export default Mint4
