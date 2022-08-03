import {View, Text, ScrollView, SafeAreaView} from 'react-native';
import React from 'react';
import {styles} from './KycUploadStyle';
import HeaderA from '../../compnent/header/HeaderA';
import KycText from '../../compnent/kycText/kycText';
import {kycUpload} from '../../constant/constant';
import UploadImageCard from '../../compnent/uploadImageCard/UploadImageCard';
import Button from '../../compnent/button/Button';
import GradientButton1 from '../../compnent/button/GradientButton1';
import kyc from '../../assets/icons/kycIcon.png';

const UploadData = ({navigation}) => {
  return (
    <ScrollView showsVerticalScrollIndicator={false}  style={styles.container}>
      <SafeAreaView />
      <View style={styles.subContainer}>
        <HeaderA bgColor='#F3F2F3' title="KYC" Nav={navigation} />
        <KycText text='Verication Icompleted'  bgColor='#F3F2F3' image={kyc} width={15} />
        {kycUpload.map((item, index) => {
          return <UploadImageCard kycUpload={item} />;
        })}
        <View style={styles.button}>
          <Button
            onPress={() => navigation.goBack()}
            text="Back"
            width="45%"
            bgColor="#F3F3F3"
            height={54}
            color="black"
          />
          <GradientButton1
            click={() => navigation.navigate('UploadImage')}
            text="Next"
            width="45%"
            height={54}
          />
        </View>
      </View>
    </ScrollView>
  );
};

export default UploadData;
