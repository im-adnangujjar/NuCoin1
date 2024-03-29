import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  SafeAreaView,
  ImageBackground,
} from 'react-native';
import React from 'react';
import {styles} from './CardStyle';
import LinearGradient from 'react-native-linear-gradient';
import coin from '../../assets/icons/coin.png';
import icon from '../../assets/icons/copy_icon.png';
import card from '../../assets/images/dashboardCard.png';

const Card = () => {
  return (
    <ScrollView>
      <SafeAreaView />
      <View>
        {/* <LinearGradient
          start={{x: 2, y: 0}}
          end={{x: 0, y: 2}}
          colors={['rgba(0, 234, 255, 0.1)', 'rgba(77, 53, 137, 0.6)', 'rgba(0, 234, 255, 0.9)']}
          style={styles.linearGradient}> */}
        <ImageBackground imageStyle={{borderRadius: 10}} source={card}>
          <View style={styles.bgColor}>
            <View style={styles.title_flex}>
              <Text style={styles.name}>Jhon Doe</Text>
              <Text style={styles.title}>s-bundle</Text>
            </View>
            <Text style={styles.title}>02-10-2022 | 08:08:20 am</Text>
            <Text style={styles.title1}>Balance</Text>
            <View style={styles.image_flex}>
              <Image style={styles.coinImage} source={coin} />
              <Text style={styles.coin}>607380.920 NUC</Text>
            </View>
            <Text style={styles.title}>
              Mint Session: 02-10-2022 | 08:08:20 am
            </Text>
            <View style={styles.flex}>
              <Text style={styles.title}> 5Dy2dfhwwsaas</Text>
              <View style={styles.icon_flex}>
                <Text style={styles.title}>Copy</Text>
                <Image style={styles.image} source={icon} />
              </View>
            </View>
          </View>
        </ImageBackground>
        {/* </LinearGradient> */}
      </View>
    </ScrollView>
  );
};
export default Card;
