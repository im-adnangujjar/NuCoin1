import { StyleSheet, Text, View, ScrollView, TextInput, Image,TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { styles } from './MintStyle'
import { SafeAreaView } from 'react-native-safe-area-context'
import Header from '../../compnent/header/Header'
import eye from '../../assets/icons/eye.png'
import Button from '../../compnent/button/Button'
import Modal from "react-native-modal";
import close from '../../assets/icons/close_icon.png'

const Mint = ({ navigation }) => {
    const [isModalVisible, setModalVisible] = useState(false);
    const toggleModal = () => {
        setModalVisible(!isModalVisible);
    };
    return (
        <ScrollView style={styles.container}>
            <SafeAreaView />
            <View style={styles.subContainer}><Header nav={navigation} />
                <View style={styles.flex}>
                    <Text style={styles.password}>Set Password</Text>
                    <Text style={styles.numbers}> 01 . <Text style={styles.numbers1}>03</Text></Text>
                </View>
                <View >
                    <TextInput style={styles.input} placeholder='Enter password' />
                    <Image style={styles.icon} source={eye} />
                </View>
                <Text style={styles.text}>Reset Password</Text>
                <View style={styles.button}>
                    <Button click={() => navigation.navigate('DashBoard')} text='Cancal' width='45%' bgColor='white' color='black' />
                    <Button click={toggleModal} text='Mint' width='45%' bgColor='#34DDDC' color='black' />
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
                            <Button click={() => navigation.navigate('DashBoard')} text='Cancal' width='45%' bgColor='white' color='black' />
                            <Button click={() => navigation.navigate('Mint2')} text='Ok' width='45%' bgColor='#34DDDC' color='black' />
                        </View>
                    </View>
                </Modal>

            </View>




        </ScrollView>
    )
}

export default Mint
