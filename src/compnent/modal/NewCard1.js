import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {styles} from './NewCardStyle';
import WalletList from '../walletlist/WalletList';
import CardB from '../card/CardB';
import {select, data1} from '../../constant/constant';
import IconButton from '../button/IconButton';
import icon from '../../assets/icons/check.png';
import GradientButton from '../button/GradientButton';

const NewCard1 = ({navigation, modal ,closeModal}) => {
  const toggleModal2 = () => {
    navigation.navigate('ShowKey');
  };
  return (
    <View style={styles.modalBg1}>
      <View style={styles.borderCenter}>
        <View style={styles.border}></View>
      </View>
      <View style={styles.wallet}>
        <WalletList modal={modal} navigation={navigation} />
      </View>
      <CardB select={select[0]} />
      <View
        style={{
          backgroundColor: '#F3F2F3',
          borderRadius: 10,
          paddingBottom: 20,
        }}>
        <CardB select={select[2]} toggleModal1={toggleModal2} close={closeModal}>
          {data1.map((item, index) => {
            return (
              <GradientButton title={navigation} key={index} item={item} />
            );
          })}
        </CardB>
        <View style={styles.button}>
          <IconButton
            text="primry wallet"
            icon={icon}
            colors={['white', 'white']}
            color="green"
            border="green"
          />
        </View>
      </View>
    </View>
  );
};
export default NewCard1;
