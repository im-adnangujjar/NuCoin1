import { StyleSheet, Text, View, ScrollView, SafeAreaView, Image,TouchableOpacity  } from 'react-native'
import React from 'react'
import { styles } from './DashBoardStyle'
import Header from '../../compnent/header/Header'
import sun from '../../assets/icons/sunIcon.png'
import wallet from '../../assets/icons/wallet.png'
import more from '../../assets/icons/more.png'
import { data1, dashboard } from '../../constant/constant'
import Card from '../../compnent/card/Card'
import GradientButton from '../../compnent/button/GradientButton'
import DashBoardCard from '../../compnent/card/DashBoardCard'

const DashBoard = ({navigation}) => {

  // const test=() =>{
  //   navigation.navigate("profile")
  // }
 
  
  return (
    <ScrollView style={styles.container} >
      <SafeAreaView />
      <View style={styles.subContainer}>
        <Header nav={navigation} />
        <View style={styles.image_flex}>
          <View>
            <View style={styles.flex}>
              <Image source={sun} />
              <Text style={styles.morning}>Good Morning</Text>
            </View>
            <Text style={styles.name}>Jhon Doe</Text>
          </View>
          <TouchableOpacity onPress={ () => navigation.navigate("Wallet")}>
          <Image  source={wallet} />

          </TouchableOpacity>
        </View>
        <View style={styles.image_flex}><Text style={styles.list}>Wallet List</Text>
          <View style={styles.flex}>
            <Text style={styles.title} >See All</Text>
            <Image source={more} />
          </View>
        </View>
        <View style={styles.card}>
          <Card />
        </View>
        <View style={styles.button}>
          {
            data1.map((item, index) => {
              return (
                 <GradientButton key={index} item={item} />
            
              )
            })
          }
        </View>
        <View style={styles.image_flex}><Text style={styles.list}>Recent Transactions</Text>
          <View style={styles.flex}>
            <Text style={styles.title} >See All</Text>
            <Image source={more} />
          </View>
        </View>
        <View style={styles.card}>
        {
          dashboard.map((item, index) => {
            return <DashBoardCard dashboard={item} />
          })
        }
        </View>

      </View>
    </ScrollView>
  )
}

export default DashBoard
