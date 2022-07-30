import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ScrollView,
  Image,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {styles} from './MenuStyle';
import person from '../../assets/images/person.png';
import more from '../../assets/icons/more.png';
import moon from '../../assets/icons/moon.png';
import off from '../../assets/icons/off.png';
import user from '../../assets/icons/user-check.png';
import HeaderA from '../../compnent/header/HeaderA';
import IconButton from '../../compnent/button/IconButton';
import icon from '../../assets/icons/log-out (1).png';

const Menu = ({navigation}) => {
  return (
    <ScrollView style={styles.container}>
      <SafeAreaView />
      <View style={styles.subContainer}>
        <HeaderA bgColor='#F3F2F3' title="Menu" Nav={navigation} />
        <Text style={styles.title}>Account</Text>
        <View style={styles.flex}>
          <Image style={styles.image} source={person} />
          <View style={styles.icon_flex}>
            <View>
              <Text style={styles.name}>Jhon Doe</Text>
              <Text style={styles.information}>Personal Info</Text>
            </View>
            <TouchableOpacity
              onPress={() => navigation.navigate('PersonalInformation')}>
              <View style={styles.iconBg}>
                <Image style={styles.moreImage} source={more} />
              </View>
            </TouchableOpacity>
          </View>
        </View>

        <Text style={styles.title}>Setting</Text>
        <View style={styles.kyc_flex}>
          <View style={styles.text_flex1}>
            <View style={styles.icon_bg}>
              <Image style={styles.moon} source={moon} />
            </View>
            <Text style={styles.text}>Dark Mood</Text>
          </View>
          <View style={styles.text_flex}>
            <Text style={styles.off_button}>Off</Text>
            <Image style={styles.button_image} source={off} />
          </View>
        </View>
        <View style={styles.kyc_flex}>
          <View style={styles.text_flex}>
            <View style={styles.icon_bg}>
              <Image style={styles.user} source={user} />
            </View>
            <TouchableOpacity onPress={() => navigation.navigate('personalDetails')}>
              <Text style={styles.kycText}>KYC</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.iconBg}>
            <Image style={styles.moreImage} source={more} />
          </View>
        </View>
        <IconButton
          text="LogOut"
          click={() => navigation.navigate('SplashScreen')}
          height={57}
          width="100%"
          icon={icon}
          iconColor="white"
        />
      </View>
    </ScrollView>
  );
};

export default Menu;
