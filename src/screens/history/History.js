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
import {styles} from './HistoryStyle';
import Header from '../../compnent/header/Header';
import icon from '../../assets/icons/Download_icon.png';
import CardA from '../../compnent/card/CardA';
import {card} from '../../constant/constant';
import drop from '../../assets/icons/dropIcon.png';
import image from '../../assets/images/person.png';
import icon1 from '../../assets/icons/notification.png';
import icon2 from '../../assets/icons/arrow-left.png';

const History = ({navigation}) => {
  return (
    <ScrollView style={styles.mainContainer}>
      <SafeAreaView />
      <View style={styles.subContainer}>
        <View style={styles.bar}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <View style={styles.iconBg}>
              <Image style={styles.leftArrow} source={icon2} />
            </View>
          </TouchableOpacity>
          <View style={styles.image1}>
            <TouchableOpacity
              onPress={() => navigation.navigate('Notification')}>
              <Image style={styles.image_margin} source={icon1}/>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('profile')}>
              <Image style={styles.person} source={image} />
            </TouchableOpacity>
          </View>
        </View>
        <Text style={styles.title}>Recent Transactions</Text>
        <View style={styles.buttonAlign}>
          <View style={styles.bgButton}>
            <View style={styles.iconAlign}>
              <Text style={styles.month}>This month</Text>
              <Image style={styles.drop} source={drop} />
            </View>
          </View>
          <View style={styles.buttonFlex}>
            <View style={styles.flex}>
              <Image style={styles.image} source={icon} />
              <Text style={styles.text}>Download Data</Text>
            </View>
          </View>
        </View>

        {card.map((item, index) => {
          return <CardA card={item} />;
        })}
      </View>
    </ScrollView>
  );
};

export default History;
