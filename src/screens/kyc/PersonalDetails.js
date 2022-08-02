import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  SafeAreaView,
  Image,
} from 'react-native';
import React from 'react';
import {styles} from './KycStyles';
import HeaderA from '../../compnent/header/HeaderA';
import KycText from '../../compnent/kycText/kycText';
import KycInput from '../../compnent/kycInput,/KycInput';
import {kycData} from '../../constant/constant';
import GradientButton1 from '../../compnent/button/GradientButton1';
import kyc from '../../assets/icons/kycIcon.png';

const KYc = ({navigation}) => {
  return (
    <View style={styles.container}>
      <ScrollView>
        <SafeAreaView />
        <View style={styles.subContainer}>
          <HeaderA bgColor='#F3F2F3' title="kyc" Nav={navigation} />
          <KycText number1="01 . " number2="04" image={kyc} bgColor="#F3F2F3" width={15}/>
          <Text style={styles.title}>Personal Details</Text>
          {kycData.map(item => {
            return <KycInput kycData={item} />;
          })}
          <View style={styles.button}>
            <GradientButton1
              click={() => navigation.navigate('address')}
              text="Next"
              width="100%"
            />
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default KYc;
