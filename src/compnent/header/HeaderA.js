import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {styles} from './HeaderAStyle';
// import more from '../../assets/icons/more.png'
import icon from '../../assets/icons/arrow-left.png';

const HeaderA = props => {
  return (
    <View style={styles.display}>
      <TouchableOpacity onPress={() => props.Nav.goBack('DashBoard')}>
        <View style={styles.iconBg}>
          <Image style={styles.arrow} source={icon} />
        </View>
      </TouchableOpacity>
      <Text style={styles.title}>{props.title}</Text>
    </View>
  );
};

export default HeaderA;
