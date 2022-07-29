import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import {styles} from './UploadImagesStyle';
import {ScrollView} from 'react-native-gesture-handler';
import close from '../../assets/icons/close_icon.png'

const UploadImages = ({upload, photoWarning = false}) => {
  return (
    <ScrollView>
      <Text style={styles.text}>{upload.title}</Text>
      <View style={styles.bgColor}>
        <View style={styles.iconflex}>
          <View style={styles.flex}>
            <Image style={styles.image} source={upload.img} />
            <View>
              {photoWarning && upload.title === 'Photo ID' ? (
                <>
                  <Text style={[styles.title, {color: 'red'}]}>
                    {upload.title1}
                  </Text>
                  <Text style={[styles.title, {color: 'red'}]}>
                    {upload.text}
                  </Text>
                </>
              ) : (
                <>
                  <Text style={styles.title}>{upload.title1}</Text>
                  <Text style={styles.title}>{upload.text}</Text>
                </>
              )}
            </View>
          </View>
            {photoWarning && upload.title === 'Photo ID' ? (
          <View style={[styles.iconBg,{backgroundColor:'#FF2626'} ]}>
              <Image style={styles.icon} source={close} />
          </View>

            ) : (
          <View style={styles.iconBg}>
              <Image style={styles.icon} source={upload.icon} />
          </View>
            )}
        </View>
      </View>
    </ScrollView>
  );
};

export default UploadImages;
