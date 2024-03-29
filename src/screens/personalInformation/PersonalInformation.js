import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ScrollView,
  Image,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {styles} from './PersonalInformationStyle';
import person from '../../assets/images/upload.png';
import more from '../../assets/icons/more.png';
import lock from '../../assets/icons/lock.png';
import PersonalInput from '../../compnent/personalInput/PersonalInput';
import {input} from '../../constant/constant';
import icon from '../../assets/icons/arrow-left.png';
import icon1 from '../../assets/icons/personalCheck.png';

const PersonalInformation = ({navigation}) => {
  return (
    <ScrollView style={styles.container}>
      <SafeAreaView />
      <View style={styles.subContainer}>
        <View style={styles.display}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <View style={styles.iconBg}>
              <Image style={styles.leftArrow} source={icon} />
            </View>
          </TouchableOpacity>
          <View style={styles.shadow}>
            <View style={styles.iconBg1}>
              <Image style={styles.iconImage} source={icon1} />
            </View>
          </View>
        </View>
        <Text style={styles.title}>Personal Information</Text>
        <Text style={styles.text}>Photo</Text>
        <View style={styles.flex}>
          <Image style={styles.image} source={person} />
        </View>
        <Text style={styles.upload}>Upload Image</Text>
        {input.map(item => {
          return <PersonalInput input={item} />;
        })}
        <View style={styles.imageFlex}>
          <View style={styles.lockBg}>
            <Image style={styles.lockIcon} source={lock} />
          </View>
          <View style={styles.iconFlex}>
            <Text style={styles.update}>Update Account Password</Text>
            <View style={styles.moreIconBg}>
              <Image style={styles.moreIcon} source={more} />
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default PersonalInformation;
