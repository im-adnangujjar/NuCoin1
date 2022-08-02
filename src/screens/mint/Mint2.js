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
import {styles} from './Mint2Style';
import Header from '../../compnent/header/Header';
import block from '../../assets/images/Block4.png';
import Button from '../../compnent/button/Button';
import {mintData, numbers} from '../../constant/constant';
import MintItem1 from '../../compnent/mintItem /MintItem1';
import logo from '../../assets/images/walletlogo.png';
import GradientButton1 from '../../compnent/button/GradientButton1';

const Mint2 = ({navigation}) => {
  return (
    <ScrollView style={styles.container}>
      <SafeAreaView />
      <View style={styles.subContainer}>
        <Header logo={logo} nav={navigation} />
        <View style={styles.flex}>
          <Text style={styles.title}>Confirm Mnemonic</Text>
          <Text style={styles.numbers}>
            02. <Text style={styles.numbers1}>02</Text>
          </Text>
        </View>

        <View style={styles.imageCenter}>
          <View style={styles.imagBg}>
            <Image style={styles.blockImage} source={block} />
          </View>
        </View>
        <View style={styles.button_align}>
          {numbers.map(item => {
            return <MintItem1 numbers={item} />;
          })}
        </View>
        <TextInput
          style={styles.input}
          placeholder="Enter your Mnemonic"
          placeholderTextColor={'black'}
        />
        {/* {
                    numbers.map((item ,index)=>{
                       return <MintItem1/>
                    })
                } */}

        <Button text="Load Mnemonic" width="100%" bgColor="#282B33" />
        <View style={styles.button}>
          <Button
            onPress={() => navigation.goBack('Mint3')}
            text="Cancel"
            bgColor="#F3F3F3"
            color="black"
            width={Platform.OS==='ios'?170:150}
            height={54}
          />
          <GradientButton1
            click={() => navigation.navigate('Mint3')}
            text="Continue"
            width={Platform.OS==='ios'?170:150}
            colors={['#50E6CA', '#34DDDC']}
            height={54}
            color="black"
          />
        </View>
      </View>
    </ScrollView>
  );
};

export default Mint2;
