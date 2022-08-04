import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  SafeAreaView,
  Image,
} from 'react-native';
import React from 'react';
import {styles} from './Notification1Style';
import download from '../../assets/icons/Download_icon.png';
import transfer from '../../assets/icons/transfer.png';

const Notification1 = () => {
  return (
    <View style={styles.container}>
      <SafeAreaView />
      <View style={styles.subContainer}>
        <View style={styles.flex}>
          <View style={styles.imageBg}>
            <Image style={styles.image} source={download} />
          </View>
          <View>
            <Text style={styles.title}>
              Wallet <Text style={styles.jhon}>Jhon Doe</Text>
            </Text>
            <Text style={styles.jhon}>Minted 20 Minutes Ago</Text>
            <Text style={styles.text}>20 Minutes Ago</Text>
          </View>
        </View>
        <View style={styles.flex}>
          <View style={styles.imageBg}>
            <Image style={styles.image1} source={transfer} />
          </View>
          <View>
            <Text style={styles.title}>
              Account <Text style={styles.jhon}>Jhon Doe </Text>Transfered .100
            </Text>
            <Text style={styles.title1}>
              09 NUC To Reciever <Text style={styles.jhon}>5Dy2dfhwwsaas</Text>
            </Text>
            <Text style={styles.text}>20 Minutes Ago</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Notification1;
