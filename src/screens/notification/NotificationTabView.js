import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import HeaderA from '../../compnent/header/HeaderA';
import {styles} from './NotificationTabViewStyle';
import Notification from './Notification';
import Notification1 from './Notification1';

const NotificationTabView = ({navigation}) => {
  const [selected, setSelected] = useState('Announcements');

  return (
    <ScrollView style={styles.container}>
      <View>
        <SafeAreaView />
        <HeaderA title="Notification" bgColor='#F3F2F3' Nav={navigation} />
        <View style={styles.subContainer}>
          <TouchableOpacity onPress={() => setSelected('Announcements')}>
            <View
              style={[
                styles.tabs,
                {borderBottomWidth: selected === 'Announcements' ? 6 : 0},
              ]}>
              <Text
                style={[
                  styles.title,
                  {opacity: selected === 'Announcements' ? 1 : 0.3},
                ]}>
                Announcements
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setSelected('All')}>
            <View
              style={[
                styles.align,
                {borderBottomWidth: selected === 'All' ? 6 : 0},
              ]}>
              <Text
                style={[styles.title, {opacity: selected === 'All' ? 1 : 0.3}]}>
                All
              </Text>
              <View style={styles.bgColor}>
                <Text style={styles.text}>2</Text>
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setSelected('unread')}>
            <View
              style={[
                styles.tabs,
                {borderBottomWidth: selected === 'unread' ? 6 : 0},
              ]}>
              <Text
                style={[
                  styles.title,
                  {opacity: selected === 'unread' ? 1 : 0.3},
                ]}>
                Unread
              </Text>
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
