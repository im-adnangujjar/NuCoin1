import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  SafeAreaView,
} from 'react-native';
import React from 'react';
import {styles} from './walletStyle';
import WalletButton from '../../compnent/walletButoon /WalletButton';
import {data} from '../../constant/constant';
import copy from '../../assets/icons/copy_icon.png';
import Button from '../../compnent/button/Button';
import LinearGradient from 'react-native-linear-gradient';
import Header from '../../compnent/header/Header';
import warning from '../../assets/icons/warning.png';
import logo from '../../assets/images/walletlogo.png';
import GradientButton1 from '../../compnent/button/GradientButton1';

export default function Wallet({navigation}) {
  return (
    <ScrollView style={styles.container}>
      <SafeAreaView />
      <View style={styles.subContainer}>
        <Header logo={logo} nav={navigation} />
        <View style={styles.display}>
          <Text style={styles.title}>Create Wallet</Text>
          <Text style={styles.numbers}>
            01. <Text style={styles.numbers1}>03</Text>
          </Text>
        </View>
        <LinearGradient
          style={styles.color}
          start={{x: -4, y: -2.5}}
          end={{x: 1, y: 0.5}}
          colors={['#ECB8B8', '#FFFFFF']}>
          <View style={styles.bgColor}>
            <Image style={styles.warning} source={warning} />
            <Text style={styles.descripation}>
              PLease copy down the mnemonic for you new account below. If you
              loose these mnemonics, you will risk loosing your coins (wealth).
              You will have to confirm the mnemonic on the text sceen
            </Text>
          </View>
        </LinearGradient>
        <View style={styles.button_align}>
          {data.map((item, index) => {
            return <WalletButton key={index} item={item} />;
          })}
        </View>
        <View style={styles.text_flex}>
          <Text style={styles.copy}>Copy to Clipboard</Text>
          <Image style={styles.icon} source={copy} />
        </View>
        <View style={styles.button}>
          <Button
            text="Cancel"
            onPress={() => navigation.goBack('Wallet2')}
            color="black"
            bgColor="#F3F3F3"
            width="45%"
            height={54}
          />
          <GradientButton1
            click={() => navigation.navigate('Wallet2')}
            text="Continue"
            width="45%"
            height={54}
          />
        </View>
      </View>
    </ScrollView>
  );
}
