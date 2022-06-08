import { StyleSheet, Text, View,SafeAreaView,ScrollView,Image } from 'react-native'
import React from 'react'
import {styles} from './HistoryStyle'
import Header from '../../compnent/header/Header'
import icon from '../../assets/icons/Download_icon.png'

const History = () => {
  return (
   <ScrollView style={styles.mainContainer}>
            <SafeAreaView />
            <View style={styles.subContainer}>
                <Header />
                <Text>Recent Transactions</Text>
                <View style={styles.flex}>
                <Text>Download Data</Text>
                <Image style={styles.image} source={icon} />

                </View>
                </View>
    </ScrollView>
  )
}

export default History
