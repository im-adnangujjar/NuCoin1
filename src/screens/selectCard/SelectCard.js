import { StyleSheet, Text, View, ScrollView, SafeAreaView, Image } from 'react-native'
import React from 'react'
import { styles } from './SelectCardStyle'
import CardB from '../../compnent/card/CardB'
import { select } from '../../constant/constant'
import WalletList from '../../compnent/walletlist/WalletList'

const SelectCard = ({ navigation }) => {
    return (
        <ScrollView style={styles.container}>
            <SafeAreaView />
            <View style={styles.subContainer}>
                <View style={styles.borderCenter}>
                    <View style={styles.border}></View>
                </View>
                <View style={styles.wallet}>
                    <WalletList nav={navigation} />
                </View>
                {
                    select.map((item) => {
                        return <CardB select={item} />
                    })
                }
            </View>
        </ScrollView>

    )
}

export default SelectCard
