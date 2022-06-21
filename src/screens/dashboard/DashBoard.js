import { StyleSheet, Text, View, ScrollView, SafeAreaView, Image, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'

import { styles } from './DashBoardStyle'
import Header from '../../compnent/header/Header'
import sun from '../../assets/icons/sunIcon.png'
import wallet from '../../assets/icons/wallet.png'
import more from '../../assets/icons/more.png'
import Modal from "react-native-modal";
import { data1, dashboard, select, } from '../../constant/constant'
import CardB from '../../compnent/card/CardB'
import Card from '../../compnent/card/Card'
import WalletList from '../../compnent/walletlist/WalletList'
import GradientButton from '../../compnent/button/GradientButton'
import DashBoardCard from '../../compnent/card/DashBoardCard'
import NewCard from '../../compnent/modal/NewCard'


const DashBoard = ({ navigation }) => {
  const [isModalVisible, setModalVisible] = useState(false);
  const [isModalVisible1, setModalVisible1] = useState(false);
  const [isModalVisible2, setModalVisible2] = useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };
  const toggleModal2 = () => {
    setModalVisible2(!isModalVisible2);
  };
  const toggleModal1 = (val) => {
    if (val === "toggleModal1") {
      setModalVisible1(true);
    } else if (val === "toggleModal2") {
      setModalVisible2(true)
    }
  };
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
          <TouchableOpacity onPress={() => navigation.navigate("Wallet")}>
            <Image source={wallet} />
          </TouchableOpacity>
        </View>
        <View style={styles.image_flex}><Text style={styles.list}>Wallet List</Text>
          <View style={styles.flex}>
            <TouchableOpacity onPress={toggleModal}>
              <Text style={styles.title} >See All</Text>
            </TouchableOpacity>
        
            {/* <Modal backdropColor='black' isVisible={isModalVisible1}>
              <View style={styles.modalBg}>
                <View style={styles.borderCenter}>
                  <View style={styles.border}></View>
                </View>
                <View style={styles.wallet}>
                  <WalletList />
                </View>
                <CardB select={select[0]} />
                <CardB select={select[1]}>
                  {
                    data1.map((item, index) => {
                      return (
                        <GradientButton title={navigation} key={index} item={item} />
                      )
                    })
                  }
                </CardB>
              </View>
            </Modal> */}
            {/* <Modal backdropColor='black' isVisible={isModalVisible1}>
              <View style={styles.modalBg}>
                <View style={styles.borderCenter}>
                  <View style={styles.border}></View>
                </View>
                <View style={styles.wallet}>
                  <WalletList nav={navigation} />
                </View>
                <CardB select={select[0]} toggleModal2={toggleModal2}>
                  {
                    data1.map((item, index) => {
                      return (
                        <GradientButton title={navigation} key={index} item={item} />
                      )
                    })
                  }
                </CardB>

                <CardB select={select[1]} />
              </View>
            </Modal> */}
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
                <GradientButton title={navigation} key={index} item={item} />
              )
            })
          }
        </View>
        <View style={styles.image_flex}><Text style={styles.list}>Recent Transactions</Text>
          <View style={styles.flex}>
            <TouchableOpacity onPress={() => navigation.navigate("History")}>
              <Text style={styles.title} >See All</Text>
            </TouchableOpacity>
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
      <Modal isVisible={isModalVisible} style={{
        margin: 0
      }}>
          <NewCard navigation={navigation}/>
        </Modal>
    </ScrollView>
  )
}

export default DashBoard

