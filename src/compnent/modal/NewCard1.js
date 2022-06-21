import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { styles } from './NewCardStyle'
import WalletList from '../walletlist/WalletList'
import CardB from '../card/CardB'
import  Modal from 'react-native-modal'
import ModalCard from './ModalCard'
import { select, data1 } from '../../constant/constant'
import GradientButton from '../button/GradientButton'


const NewCard1 = ({ navigation }) => {
    const [isModalVisible2, setModalVisible2] = useState(false);

    const toggleModal2 = () => {
        navigation.navigate('ShowKey');
    };
    return (
        <View style={styles.modalBg}>
            <View style={styles.borderCenter}>
                <View style={styles.border}></View>
            </View>
            <View style={styles.wallet}>
                <WalletList />
            </View>
            <CardB select={select[0]} />
            <CardB select={select[2]} toggleModal1={toggleModal2}>
                {
                    data1.map((item, index) => {
                        return (
                            <GradientButton title={navigation} key={index} item={item} />
                        )
                    })
                }
            </CardB>
        </View>
    )
}
export default NewCard1
