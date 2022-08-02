import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Platform,
} from 'react-native';
import React from 'react';
import {styles} from './GradientButtonStyle';
import LinearGradient from 'react-native-linear-gradient';

const GradientButton = ({item, title, ...props}) => {
  const clickable = item.click;
  return (
    <TouchableOpacity onPress={() => title.navigate(clickable && clickable)}>
      <LinearGradient
        start={{
          x: Platform.OS === 'ios' ? 0.2 : 0.0,
          y: Platform.OS === 'ios' ? 0 : 0,
        }}
        end={{
          x: Platform.OS === 'ios' ? 0.5 : 0.5,
          y: Platform.OS === 'ios' ? 1 : 0.6,
        }}
        colors={[item.colorA, item.colorB]}
        style={styles.linearGradient}>
        <View style={styles.button}>
          <View style={styles.button_align}>
            <Image style={styles.iconSize} source={item.icon} />
            <Text style={styles.button_text}>{item.title}</Text>
          </View>
        </View>
      </LinearGradient>
    </TouchableOpacity>
  );
};

export default GradientButton;
