import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  Image
} from 'react-native';
import React, {useState} from 'react';
import HeaderA from '../../compnent/header/HeaderA';
import {styles} from './NotificationTabViewStyle';
import Notification from './Notification';
import Notification1 from './Notification1';
import icon from '../../assets/icons/arrow-left.png'

const NotificationTabView = ({navigation}) => {
  const [selected, setSelected] = useState('Announcements');

  return (
    <ScrollView style={styles.container}>
      <View>
        <SafeAreaView />
        <View style={styles.display}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <View style={styles.iconBg}>
          <Image style={styles.arrow} source={icon} />
        </View>
      </TouchableOpacity>
      <Text style={styles.title}>Notification</Text>
    </View>
        <View style={styles.subContainer}>
          <TouchableOpacity onPress={() => setSelected('Announcements')}>
            
              <Text
                style={[
                  styles.title,
                  {opacity: selected === 'Announcements' ? 1 : 0.3},
                ]}>
                Announcements
              </Text>
              <View
              style={[
                styles.tabs,
                {borderWidth: selected === 'Announcements' ? 2 : 0},
              ]}></View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setSelected('All')}>
            <View
              style={
                styles.align}>
              <Text
                style={[styles.title, {opacity: selected === 'All' ? 1 : 0.3}]}>
                All
              </Text>

              <View style={styles.bgColor}>
                <Text style={styles.text}>2</Text>
              </View>
            </View>
            <View style={[
                styles.tabs,
                {borderWidth: selected === 'All' ? 2 : 0},
              ]}></View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setSelected('unread')}>
            <View
             >
              <Text
                style={[
                  styles.title,
                  {opacity: selected === 'unread' ? 1 : 0.3},
                ]}>
                Unread
              </Text>
              <View style={[
                styles.tabs,
                {borderWidth: selected === 'unread' ? 2: 0},
              ]}></View>
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.line}></View>
        <View>{selected === 'All' ? <Notification1 /> : <Notification />}</View>
      </View>
    </ScrollView>
  );
};

export default NotificationTabView;
