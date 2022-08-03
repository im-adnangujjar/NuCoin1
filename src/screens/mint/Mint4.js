import {
  StyleSheet,
  Text,
  View,
  TextInput,
  SafeAreaView,
  Image,
  ScrollView,
  Platform,
} from 'react-native';
import React from 'react';
import {styles} from '../coin/CoinAStyle';
import Button from '../../compnent/button/Button';
import block from '../../assets/images/Block2.png';
import Header from '../../compnent/header/Header';
import eye from '../../assets/icons/eye.png';
import logo from '../../assets/images/walletlogo.png';
import GradientButton1 from '../../compnent/button/GradientButton1';

const Mint4 = ({navigation}) => {
  return (
    <ScrollView style={styles.mainContainer}>
      <SafeAreaView />
      <View style={styles.subContainer}>
        <Header logo={logo} />
        <View style={styles.flex}>
          <Text style={styles.password}>Set Password</Text>
          <Text style={styles.numbers}>
            03.<Text style={styles.numbers1}>03</Text>
          </Text>
        </View>
        <View style={styles.imageCenter}>
          <View style={styles.imageBg}>
            <View style={styles.image}>
              <Image style={styles.blockImage} source={block} />
            </View>
          </View>
        </View>
        <View>
          <TextInput
            style={styles.input}
            placeholder="Enter Password"
            placeholderTextColor={'black'}
          />
          <Image style={styles.icon} source={eye} />
        </View>
        <View style={styles.button}>
          <Button
            onPress={() => navigation.goBack('Mint5')}
            text="Cancel"
            width={Platform.OS==='ios'?160:150}
            bgColor="#F3F3F3"
            color="black"
            height={54}
          />
          <GradientButton1
            click={() => navigation.navigate('animate')}
            text="Continue to Mint"
            width={Platform.OS ==='ios'?170:150}
            colors={['#50E6CA', '#34DDDC']}
            height={54}
            color="black"
          />
        </View>
      </View>
    </ScrollView>
  );
};

export default Mint4;
