import React from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import {styles} from './CardBStyle';

const CardB = ({select, toggleModal1, children, close}) => {
  // console.log('are you select', select);
  // console.log('toggal1', toggleModal1);
  // console.log('close',close)

  return (
    <View style={styles.bgColor}>
      <View style={styles.subContainer}>
        <View style={styles.flex}>
          <Image style={styles.image} source={select.image} />
          <View style={styles.iconFlex}>
            <View>
              <Text style={styles.title}>{select.title}</Text>
              <Text style={styles.text}>{select.date}</Text>
            </View>
            <TouchableOpacity onPress={toggleModal1}>
              <View
                style={{
                  backgroundColor: select.bgColor,
                  borderRadius: 20,
                  width: 32,
                  height: 32,
                  flexDirection: 'row',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Image style={styles.icon} source={select.icon1} />
              </View>
            </TouchableOpacity>
          </View>
        </View>
        <Text style={styles.text}>{select.mint} </Text>
        <Text style={styles.blance}>{select.blance}</Text>
        <Text style={styles.number}>{select.coins}</Text>
        <View style={styles.flex}>
          <Text style={styles.text}>{select.mint} </Text>
          <Text style={styles.mint}>02-10-2022 | 08:08:20 am</Text>
        </View>
        <View style={styles.aligns}>
          <View style={styles.flex}>
            <Text style={styles.text}>{select.id}</Text>
            <Text style={styles.copy}>Copy</Text>
            <Image style={styles.copyIcon} source={select.icon} />
          </View>
          <Text style={styles.bundle}>{select.bundal}</Text>
        </View>
      </View>
      {children && <View style={styles.buttons}>{children}</View>}
    </View>
  );
};
export default CardB;
