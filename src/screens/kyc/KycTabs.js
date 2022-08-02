import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ScrollView,
} from 'react-native';
import React, {useState} from 'react';
import {styles} from './KycTabsStyle';
import HeaderA from '../../compnent/header/HeaderA';
import KycText from '../../compnent/kycText/kycText';
import Kyc from './Kyc';
import Kyc1 from './Kyc1';
import check from '../../assets/icons/check.png';
import Verification from './ Verification';

const KycTabs = ({navigation}) => {
  const [activeTab, setActiveTab] = useState('personalDetails');
  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <HeaderA title="kyc" bgColor="black" Nav={navigation} color="white" />
        <KycText bgColor="#40C16C" image={check} width={12} />
        <View style={styles.flex}>
          <TouchableOpacity onPress={() => setActiveTab('personalDetails')}>
            <Text
              style={[
                styles.title,
                {opacity: activeTab === 'personalDetails' ? 1 : 0.6},
              ]}>
              PersonalDetails
            </Text>
            <View
              style={[
                styles.tabs,
                {borderWidth: activeTab === 'personalDetails' ? 3 : 0},
              ]}></View>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => setActiveTab('Address')}>
            <Text
              style={[
                styles.title,
                {opacity: activeTab === 'Address' ? 1 : 0.6},
              ]}>
              Address
            </Text>

            <View
              style={[
                styles.tabs,
                {borderWidth: activeTab === 'Address' ? 3 : 0},
              ]}></View>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => setActiveTab('Ids')}>
            <Text
              style={[styles.title, {opacity: activeTab === 'Ids' ? 1 : 0.6}]}>
              ID`s
            </Text>
            <View
              style={[
                styles.tabs,
                {borderWidth: activeTab === 'Ids' ? 3 : 0},
              ]}></View>
          </TouchableOpacity>
        </View>
        <View style={styles.border}></View>
        {activeTab === 'personalDetails' ? (
          <Kyc />
        ) : activeTab === 'Address' ? (
          <Kyc1 />
        ) : activeTab === 'Ids' ? (
          <Verification />
        ) : (
          ''
        )}
      </ScrollView>
    </View>
  );
};

export default KycTabs;
