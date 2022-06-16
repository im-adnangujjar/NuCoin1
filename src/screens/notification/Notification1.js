import { StyleSheet, Text, View, ScrollView, SafeAreaView, Image } from 'react-native'
import React from 'react'
import { styles } from './Notification1Style'
import download from '../../assets/icons/Download_icon.png'
import transfer from '../../assets/icons/transfer.png'

const Notification1 = () => {
  return (
    <ScrollView style={styles.container} >
      <SafeAreaView />
      <View style={styles.subContainer}>
        <View style={styles.flex}>
          <View style={styles.imageBg}>
            <Image style={styles.image} source={download} />
          </View>
          <View>
          <Text style={styles.title}>Wallet Jhon Doe</Text>
          <Text style={styles.title}>Minted 20 Minutes Ago</Text>
          <Text style={styles.text}>20 Minutes Ago</Text>
          </View>
        </View>
        <View style={styles.flex}>
          <View style={styles.imageBg}>
            <Image style={styles.image} source={transfer} />
          </View>
          <View>
          <Text style={styles.title}>Account Jhon Doe Transfered .100</Text>
          <Text style={styles.title}>09 NUC To Reciever 5Dy2dfhwwsaas</Text>
          <Text style={styles.text}>20 Minutes Ago</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  )
}

export default Notification1
