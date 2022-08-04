import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  SafeAreaView,
  TextInput,
} from 'react-native';
import React from 'react';
import {styles} from './ShowKey4Style';
import Header from '../../compnent/header/Header';
import copy from '../../assets/icons/copy_icon.png';
import Button from '../../compnent/button/Button';
import LinearGradient from 'react-native-linear-gradient';
import logo from '../../assets/images/walletlogo.png';
import GradientButton1 from '../../compnent/button/GradientButton1';

const ShowKey4 = ({navigation}) => {
  return (
    <ScrollView style={styles.container}>
      <SafeAreaView />
      <View style={styles.subContainer}>
        <Header logo={logo} nav={navigation} />
        <View style={styles.flex}>
          <Text style={styles.title}>
            Enter the OTP you recieved in your email
          </Text>
          <Text style={styles.numbers}>
            03. <Text style={styles.numbers1}>03</Text>
          </Text>
        </View>
        <TextInput style={styles.input} placeholder="252272"  placeholderTextColor={'black'}/>
        <LinearGradient
          start={{x:0.1, y: 0}}
          end={{x: 0.4, y: 1}}
          colors={['rgba(143, 167, 255, 0.4)', '#FFFFFF']}
          style={styles.linearGradient}>
          <Text style={styles.name}>
            pipe, rush, chance, peel, bottom, apparatus, chew, democratic, wash,
            make, chicken, national
          </Text>
        </LinearGradient>
        <View style={styles.align}>
          <Text style={styles.text}>Copy to Clipboard</Text>
          <Image style={styles.copyIcon} source={copy} />
        </View>
        <GradientButton1
          click={() => navigation.navigate('DashBoard')}
          text="Close"
          width="100%"
          height={57}
        />
      </View>
    </ScrollView>
  );
};

export default ShowKey4;
