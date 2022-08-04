import {StyleSheet, Text, View, ScrollView, SafeAreaView} from 'react-native';
import React from 'react';
import {styles} from './kyc1.Style';
import HeaderA from '../../compnent/header/HeaderA';
import KycText from '../../compnent/kycText/kycText';
import {kycData1} from '../../constant/constant';
import KycInput1 from '../../compnent/kycInput,/KycInpt1';
import Button from '../../compnent/button/Button';
import GradientButton1 from '../../compnent/button/GradientButton1';
import kyc from '../../assets/icons/kycIcon.png'


const Adderss = ({navigation}) => {
  return (
    <ScrollView style={styles.container}>
      <SafeAreaView />
      <View style={styles.subContainer}>
        <HeaderA bgColor='#F3F2F3' title="KYC" Nav={navigation} />
        <KycText text='Verication Icompleted' number1='02 . ' number2='04' image={kyc} bgColor='#F3F2F3' width={15}  />

        <Text style={styles.title}>Address</Text>
        {kycData1.map(item => {
          return <KycInput1 kycData1={item} />;
        })}
        <View style={styles.button}>
          <Button
            text="Back"
            onPress={() => navigation.goBack()}
            width="45%"
            bgColor="white"
            bdColor='#E7E7E7'
            bdWidth={1}
            color="black"
            height={54}
          />
          <GradientButton1
            click={() => navigation.navigate('UploadData')}
            text="Next"
            width="45%"
            height={54}
          />
        </View>
      </View>
    </ScrollView>
  );
};

export default Adderss;
