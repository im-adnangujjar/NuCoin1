import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  SafeAreaView,
  Image,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import {BlurView, VibrancyView} from '@react-native-community/blur';
import {styles} from './DashBoardStyle';
import Header from '../../compnent/header/Header';
import sun from '../../assets/icons/sunIcon.png';
import wallet from '../../assets/icons/wallet.png';
import more from '../../assets/icons/more.png';
import Modal from 'react-native-modal';
import {data1, dashboard, select} from '../../constant/constant';
import Card from '../../compnent/card/Card';
import GradientButton from '../../compnent/button/GradientButton';
import DashBoardCard from '../../compnent/card/DashBoardCard';
import NewCard from '../../compnent/modal/NewCard';
import logo from '../../assets/images/walletlogo.png';

const DashBoard = ({navigation}) => {
  const [isModalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  return (
    <ScrollView style={styles.container}>
      {/* <SafeAreaView /> */}
      <View style={styles.subContainer}>
        <Header logo={logo} nav={navigation} />
        <View style={styles.image_flex}>
          <View>
            <View style={styles.flex}>
              <Image style={styles.sun} source={sun} />
              <Text style={styles.morning}>Good Morning</Text>
            </View>
            <Text style={styles.name}>Jhon Doe</Text>
          </View>
          <TouchableOpacity onPress={() => navigation.navigate('Wallet')}>
            <Image style={styles.walletImage} source={wallet} />
          </TouchableOpacity>
        </View>
        <View style={styles.image_flex}>
          <Text style={styles.list}>Wallet List</Text>
          <View style={styles.flex}>
            <TouchableOpacity onPress={toggleModal}>
              <Text style={styles.title}>See All</Text>
            </TouchableOpacity>
            <Image style={styles.more} source={more} />
          </View>
        </View>
        <View style={styles.card}>
          <Card />
        </View>
        <View style={styles.button}>
          {data1.map((item, index) => {
            return (
              <GradientButton title={navigation} key={index} item={item} />
            );
          })}
        </View>
        <View style={styles.image_flex}>
          <Text style={styles.list}>Recent Transactions</Text>
          <View style={styles.flex}>
            <TouchableOpacity onPress={() => navigation.navigate('History')}>
              <Text style={styles.title}>See All</Text>
            </TouchableOpacity>
            <Image style={styles.more} source={more} />
          </View>
        </View>
        <View style={styles.card}>
          {dashboard.map((item, index) => {
            return <DashBoardCard dashboard={item} />;
          })}
        </View>
      </View>
      <Modal isVisible={isModalVisible} style={{margin: 0}}>
        <NewCard modal={toggleModal} navigation={navigation} />
      </Modal>
      {isModalVisible && (
        <BlurView
          style={{position: 'absolute', top: 0, left: 0, bottom: 0, right: 0}}
          blurType="light"
          blurAmount={10}
          reducedTransparencyFallbackColor="white"
        />
      )}
    </ScrollView>
  );
};

export default DashBoard;
