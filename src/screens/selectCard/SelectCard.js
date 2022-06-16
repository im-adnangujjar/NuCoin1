import { StyleSheet, Text, View, ScrollView, SafeAreaView, Image } from 'react-native'
import React from 'react'
import { styles } from './SelectCardStyle'
import close from '../../assets/icons/close_icon.png'

const SelectCard = () => {
    return (
        <ScrollView style={styles.container}>
            <SafeAreaView />
            <View style={styles.subContainer}>
                <View style={styles.flex}>
                    <Text>Wallet List</Text>
                    <Image source={close} />
                </View>

            </View>
        </ScrollView>

    )
}

export default SelectCard
