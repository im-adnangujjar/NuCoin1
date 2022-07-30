import {
  StyleSheet,
  Text,
  View,
  Image,
  SafeAreaView,
  ScrollView,
  TextInput,
} from 'react-native';
import {styles} from './CoinAStyle';
import React from 'react';
import Header from '../../compnent/header/Header';
import block from '../../assets/images/Block2.png';
import icon from '../../assets/icons/export.png';
import Button from '../../compnent/button/Button';
import IconButton from '../../compnent/button/IconButton';
import logo from '../../assets/images/walletlogo.png';
import eye from '../../assets/icons/hidden.png';

const CoinA = ({navigation}) => {
  return (
    <ScrollView style={styles.mainContainer}>
      <SafeAreaView />
      <View style={styles.subContainer}>
        <Header logo={logo} nav={navigation} />
        <View style={styles.flex}>
          <Text style={styles.text}>Set Password</Text>
          <Text style={styles.numbers}>
            02. <Text style={styles.numbers1}>02</Text>
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
          <TextInput style={styles.input} placeholder="Enter password" placeholderTextColor={'black'} />
          <Image style={styles.eye} source={eye} />
        </View>

        <View style={styles.button}>
          <Button
            onPress={() => navigation.goBack('SendCoin')}
            text="Cancel"
            width="45%"
            height={54}
            color="black"
            bgColor="#F3F3F3"
          />
          <IconButton
            click={() => navigation.navigate('SendCoin')}
            text="Transfer"
            width="45%"
            height={54}
            icon={icon}
            iconColor="white"
          />
        </View>
      </View>
    </ScrollView>
  );
};

export default CoinA;
