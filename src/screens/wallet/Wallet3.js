import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ScrollView,
  Image,
  TextInput,
} from 'react-native';
import React from 'react';
import {styles} from './Wallet3Style';
import Button from '../../compnent/button/Button';
import Header from '../../compnent/header/Header';
import logo from '../../assets/images/walletlogo.png';
import eye from '../../assets/icons/eye.png';
import GradientButton1 from '../../compnent/button/GradientButton1';

const Wallet3 = ({navigation}) => {
  return (
    <ScrollView style={styles.container}>
      <SafeAreaView />
      <View style={styles.subContainer}>
        <Header logo={logo} nav={navigation} />
        <View style={styles.title_flex}>
          <Text style={styles.title}>Create Wallet</Text>
          <Text style={styles.numbers}>
            03. <Text style={styles.numbers1}>03</Text>
          </Text>
        </View>
        <TextInput style={styles.input} placeholder="Enter Wallet Name" placeholderTextColor={'black'} />
        <View>
          <TextInput style={styles.input} placeholder="Enter Wallet Password" placeholderTextColor={'black'} />
          <Image style={styles.image} source={eye} />
        </View>
        <View>
          <TextInput
            style={styles.input}
            placeholder="Confirm Wallet Password" placeholderTextColor={'black'}
          />
          <Image style={styles.image} source={eye} />
        </View>

        <View style={styles.button_flex}>
          <Button
            onPress={() => navigation.goBack('LastWallet')}
            text="Cancel"
            width="45%"
            height={54}
            bgColor="#F3F3F3"
            color="black"
          />
          <GradientButton1
            click={() => navigation.navigate('LastWallet')}
            text="Submit"
            width="45%"
            height={54}
          />
        </View>
      </View>
    </ScrollView>
  );
};

export default Wallet3;
