import {
  StyleSheet,
  Text,
  View,
  Image,
  SafeAreaView,
  ScrollView,
  TextInput,
} from 'react-native';
import React from 'react';
import {styles} from './CoinStyle';
import Header from '../../compnent/header/Header';
import block from '../../assets/images/Block1.png';
import Button from '../../compnent/button/Button';
import Navigation from '../../navigation/Navigation';
import logo from '../../assets/images/walletlogo.png';
import GradientButton1 from '../../compnent/button/GradientButton1';

const Coin = ({navigation}) => {
  return (
    <ScrollView>
      <SafeAreaView />
      <View style={styles.subContainer}>
        <Header logo={logo} nav={navigation} />
        <View style={styles.flex}>
          <Text style={styles.title}>Send Coins</Text>
          <Text style={styles.numbers}>
            0.1 <Text style={styles.numbers1}>0.3</Text>{' '}
          </Text>
        </View>
        <View style={styles.imageCenter}>
          <View style={styles.imageBg}>
            <View style={styles.image}>
              <Image style={styles.blockImage} source={block} />
            </View>
          </View>
        </View>
        <TextInput style={styles.input} placeholder="Enter Reciever Address" />
        <TextInput style={styles.input} placeholder="Enter Amount" />
        <View style={styles.button}>
          <Button
            onPress={() => navigation.goBack()}
            text="Cancal"
            width="45%"
            height={54}
            color="black"
            bgColor="white"
          />
          <GradientButton1
            click={() => navigation.navigate('CoinA')}
            text="Submit"
            width="45%"
            height={54}
          />
        </View>
      </View>
    </ScrollView>
  );
};

export default Coin;
