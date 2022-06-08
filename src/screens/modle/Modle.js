import { StyleSheet, Text, View, SafeAreaView, ScrollView } from 'react-native'
import React from 'react'
import WalletList from '../../compnent/walletlist/WalletList'

const Modle = () => {
    return (
        <ScrollView>
            <SafeAreaView />
            <View>
                <WalletList/>
            </View>
        </ScrollView>
    )
}

export default Modle
