import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React,{useState} from 'react';
import close from '../../assets/icons/close_icon.png';
import {styles} from './WalletListStyle';

const walletList = ({navigation,modal}) => {

  console.log('navigate',navigation);
  return (
    <View style={styles.container}>
      <Text style={styles.list}>Wallet List</Text>
      <View style={styles.iconBg}>
        
      <TouchableOpacity onPress={modal}>
          <Image style={styles.close} source={close} />
      </TouchableOpacity>
      </View>

    </View>
  );
};

export default walletList;
