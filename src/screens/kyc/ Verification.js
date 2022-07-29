import {StyleSheet, View, Text, ScrollView, SafeAreaView} from 'react-native';
import React from 'react';
import {styles} from './KycUploadStyle';
import {upload} from '../../constant/constant';
import UploadImages from '../../compnent/uploadImageCard/UploadImages';

const Verification = ({navigation}) => {
  return (
    <ScrollView style={styles.container}>
      <SafeAreaView />
      <View style={styles.subContainer}>
        <Text style={styles.descripation}>
          Your KYC is <Text style={styles.completeText}>complete</Text>. Now you
          can proceed with further operation on our website like, you can create
          and access wallet.
        </Text>
        {upload.map((item, index) => {
          return <UploadImages upload={item} />;
        })}
      </View>
    </ScrollView>
  );
};

export default Verification;
