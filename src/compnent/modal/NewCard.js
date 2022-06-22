import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { styles } from './NewCardStyle'
import WalletList from '../walletlist/WalletList'
import CardB from '../card/CardB'
import { select } from '../../constant/constant'
import NewCard1 from './NewCard1'
import Modal from "react-native-modal";

const NewCard = ({navigation}) => {

    const [isModalVisible1, setModalVisible1] = useState(false);
    const toggleModal1 = () => {
        setModalVisible1(!isModalVisible1);
    };
    // const toggleModal1 = (val) => {
    //     if (val === "toggleModal1") {
    //       setModalVisible1(true);
    //     } else if (val === "toggleModal2") {
    //       setModalVisible2(true)
    //     }
    //   };
    return (
        <View>
            <View style={styles.modalBg}>

                <View style={styles.borderCenter}>
                    <View style={styles.border}></View>
                </View>
                <View style={styles.wallet}>
                    <WalletList navigation={navigation} />
                </View>
                <CardB select={select[0]} />
                <CardB select={select[1]} toggleModal1={toggleModal1} />
            </View>
            <Modal  style={{margin:0}}backdropColor='blur' isVisible={isModalVisible1}>
                <NewCard1 navigation={navigation}/>
            </Modal>
        </View>

    )
}

export default NewCard
