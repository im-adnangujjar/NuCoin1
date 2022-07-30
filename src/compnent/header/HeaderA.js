import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {styles} from './HeaderAStyle';
// import more from '../../assets/icons/more.png'
import icon from '../../assets/icons/arrow-left.png';

const HeaderA = (props) => {
  return (
    <View style={styles.display}>
      <TouchableOpacity onPress={() => props.Nav.goBack()}>
        <View style={[styles.iconBg,{backgroundColor:props.bgColor}]}>
          <Image style={[styles.arrow, {tintColor:props.color}]} source={icon} />
        </View>
      </TouchableOpacity>
      <Text style={styles.title}>{props.title}</Text>
    </View>
  );
};

export default HeaderA;
