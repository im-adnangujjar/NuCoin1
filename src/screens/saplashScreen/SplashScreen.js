import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  ScrollView,
  TextInput,
  ImageBackground,
} from 'react-native';
import React from 'react';
import {style} from './SplashScreenStyle';
import logo from '../../assets/images/logo.png';
import IconButton from '../../compnent/button/GradientButton1';
import welcome from '../../assets/images/Welcome.png';

const SplashScreen = ({navigation}) => {
  return (
    <View style={style.container}>
      <ScrollView>
        <ImageBackground source={welcome} resizeMode="cover">
          <View style={style.Text}>
            <Image style={style.logo} source={logo} alt="Logo" />
            <View>
              <Text style={style.welcom}>Welcome to</Text>
              <Text style={style.nuCion}>NuCoin</Text>
            </View>
            <View>
              <Text style={style.text}>
                The world's first decentralized blockchain inspired by
              </Text>
              <Text style={style.artificial}>Artificial Intellegence</Text>
            </View>
            <View style={style.button_margin}>
              <IconButton
                click={() => navigation.navigate('RaceDetail')}
                text="Start Now"
              />
            </View>
            <Text style={style.NuGenesis}>NuCoin by NuGenesis</Text>
            <View>
              <Text style={style.agree}>I have read and agreed to</Text>
              <Text style={style.terms}>
                Terms and Conditions <Text style={style.color}>and </Text>
                Privacy Policy
              </Text>
            </View>
          </View>
        </ImageBackground>
      </ScrollView>
    </View>
  );
};
export default SplashScreen;
