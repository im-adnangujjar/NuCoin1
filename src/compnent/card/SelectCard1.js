import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { styles } from './SelectCard1Style'
import coin from '../../assets/icons/coin.png'
import copy from '../../assets/icons/copy_icon.png'

const SelectCard1 = () => {
    return (
        <View style={styles.bgColor}>
            <View style={styles.flex}>
                <Image style={styles.image} source={coin} />
                <View>
                    <Text style={styles.title}>Jane Doe</Text>
                    <Text style={styles.text}>02-10-2022 | 08:08:20 am</Text>
                </View>
            </View>
            <Text style={styles.blance}>Balance</Text>
            <Text style={styles.coins}>40.920 NUC</Text>
            <Text style={styles.text}>Mint Session: 02-10-2022 | 08:08:20 am</Text>
            <View style={styles.aligns}>
                <View style={styles.flex}>
                    <Text style={styles.text}>5Dy2dfhwwsaas</Text>
                    <View style={styles.flex}>
                        <Text style={styles.text}>Copy</Text>
                        <Image style={styles.icon} source={copy} />
                    </View>
                </View>
                <Text style={styles.bundle}>s-bundle</Text>
            </View>
        </View>
    )
}

export default SelectCard1
