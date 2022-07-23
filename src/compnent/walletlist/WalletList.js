import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import close from '../../assets/icons/close_icon.png';
import {styles} from './WalletListStyle';

const walletList = ({navigation}) => {
  console.log('navigate',navigation);
  return (
    <View style={styles.container}>
      <Text style={styles.list}>WalletList</Text>
      <View style={styles.iconBg}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image source={close} />
      </TouchableOpacity>
      </View>

    </View>
  );
};

export default walletList;
