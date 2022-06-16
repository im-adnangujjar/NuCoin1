import { StyleSheet, Text, View, SafeAreaView, ScrollView, Image } from 'react-native'
import React from 'react'
import { styles } from './HistoryStyle'
import Header from '../../compnent/header/Header'
import icon from '../../assets/icons/Download_icon.png'
import CardA from '../../compnent/card/CardA'
import { card } from '../../constant/constant'
import drop from '../../assets/icons/dropIcon.png'
const History = ({navigation}) => {
  return (
    <ScrollView style={styles.mainContainer}>
      <SafeAreaView />
      <View style={styles.subContainer}>
        <Header nav={navigation} />
        <Text style={styles.title}>Recent Transactions</Text>
        <View style={styles.buttonAlign}>

          <View style={styles.bgButton}>
            <View style={styles.iconAlign}>
              <Text>This month</Text>
              <Image source={drop} />
            </View>

          </View>
          <View style={styles.buttonFlex}>
            <View style={styles.flex}>
              <Image style={styles.image} source={icon} />
              <Text style={styles.text}>Download Data</Text>
            </View>
          </View>
        </View>

        {
          card.map((item, index) => {
            return <CardA card={item} />
          })
        }
      </View>
    </ScrollView>
  )
}

export default History
