import { StyleSheet, Text, View, ScrollView, SafeAreaView, Image } from 'react-native'
import React from 'react'
import { styles } from './CardAStyle'
import icon from '../../assets/icons/transfer.png'

const CardA = () => {
    return (
        <ScrollView style={styles.Container} >
            <SafeAreaView />
            <View style={styles.card}>
                <View style={styles.subContainer}>
                    <View style={styles.image}>
                        <Image source={icon} />
                    </View>
                    <View style={styles.container_margin}>
                        <View style={styles.flex}>
                            <Text style={styles.title}>Transfer</Text>
                            <Text style={styles.descripation}>1 week ago</Text>
                        </View>
                    <Text style={styles.descripation}>Balance: 129.5999 NUC</Text>
                    </View>
                </View>
                <View style={styles.flex1}>
                    <Text style={styles.descripation}>0xe5f3643</Text>
                    <Text style={styles.descripation}>5fty6212</Text>
                </View>
            </View>
        </ScrollView>
    )
}

export default CardA
