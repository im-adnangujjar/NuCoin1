import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  SafeAreaView,
  Image,
} from 'react-native';
import React from 'react';
import {styles} from './SendCoinStyle';
import Header from '../../compnent/header/Header';
import check from '../../assets/icons/check.png';
import logo1 from '../../assets/images/wallet.png';
import logo from '../../assets/images/walletlogo.png'

import Button from '../../compnent/button/Button';
import Navigation from '../../navigation/Navigation';
import GradientButton1 from '../../compnent/button/GradientButton1';

const SendCoin = ({navigation}) => {
  return (
    <ScrollView style={styles.mainContainer}>
      <SafeAreaView />
      <View style={styles.subContainer}>
        <Header logo={logo} nav={navigation} />
        <View style={styles.flex}>
          <Text style={styles.title}>Transaction Success</Text>
          <View style={styles.image_bg}>
            <Image style={styles.check} source={check} />
          </View>
        </View>
        <View style={styles.image}>
          <Image style={styles.logo1}source={logo1} />
        </View>
        <Text style={styles.transaction}>Your transaction hash</Text>
        <Text style={styles.text}>0tiewjiofj43rx023943xwq9er0890x30</Text>
        <Text style={styles.text}>r09e09wx9090w39r890</Text>
        <View style={styles.button}>
          <GradientButton1
            click={() => navigation.navigate('DashBoard')}
            text="Close"
            width="80%"
            height={57}
          />
        </View>
      </View>
    </ScrollView>
  );
};

export default SendCoin;
