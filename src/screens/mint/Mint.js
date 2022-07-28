import { StyleSheet, Text, View, ScrollView, TextInput, Image,TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { styles } from './MintStyle'
import { SafeAreaView } from 'react-native-safe-area-context'
import {BlurView, VibrancyView} from '@react-native-community/blur';
import Header from '../../compnent/header/Header'
import eye from '../../assets/icons/eye.png'
import Button from '../../compnent/button/Button'
import Modal from "react-native-modal";
import logo from '../../assets/images/walletlogo.png'
import close from '../../assets/icons/close_icon.png'
import GradientButton1 from '../../compnent/button/GradientButton1';

const Mint = ({ navigation }) => {
    const [isModalVisible, setModalVisible] = useState(false);
    const toggleModal = () => {
        setModalVisible(!isModalVisible);
    };
    return (
        <View style={styles.container}>
        <ScrollView showsVerticalScrollIndicator={false}>
            <SafeAreaView />
            <View style={styles.subContainer}><Header logo={logo} nav={navigation} />
                <View style={styles.flex}>
                    <Text style={styles.password}>Set Password</Text>
                    <Text style={styles.numbers}> 01 . <Text style={styles.numbers1}>03</Text></Text>
                </View>
                <View >
                    <TextInput style={styles.input} placeholder='Enter Password' placeholderTextColor={'black'} />
                    <Image style={styles.icon} source={eye} />
                </View>
                <Text style={styles.text}>Reset Password</Text>
                <View style={styles.button}>
                    <Button  onPress={() => navigation.navigate('DashBoard')} text='Cancel' width='45%' bgColor='white' height={54} color='black' />
                    <GradientButton1  click={toggleModal} text='Mint' width='45%' colors={['#50E6CA','#34DDDC']} height={54} color='black' />
                </View>
                <Modal isVisible={isModalVisible}>
                    <View style={styles.modaleBg}>
                        <TouchableOpacity onPress={()=>navigation.navigate('DashBoard')}>
                        <View style={styles.align}>
                            <View style={styles.iconBg}><Image style={styles.iconColor} source={close} /></View>
                        </View>
                        </TouchableOpacity>
                        <Text style={styles.modalText}>Please retrieve and enter your mnemonics in the same order when you created this wallet.</Text>
                        <View style={styles.button1}>
                            <Button  onPress={() => navigation.navigate('DashBoard')} text='Cancel' width='46%' bgColor='white' color='black' height={54} />
                            <GradientButton1 click={() => {
                                setModalVisible(false)
                                navigation.navigate('Mint2')
                            }} text='Ok'colors={['#50E6CA','#34DDDC']} width='46%' height={54} color='black' />
                        </View>
                    </View>
                </Modal>
                {isModalVisible && (
        <BlurView
          style={{position: 'absolute', top: 0, left: 0, bottom: 0, right: 0}}
          blurType="light"
          blurAmount={10}
          reducedTransparencyFallbackColor="white"
        />
      )}
      


            </View>




        </ScrollView>
        </View>
    )
}

export default Mint
