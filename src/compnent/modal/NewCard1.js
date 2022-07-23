import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { styles } from './NewCardStyle'
import WalletList from '../walletlist/WalletList'
import CardB from '../card/CardB'
import { select, data1 } from '../../constant/constant'
import GradientButton from '../button/GradientButton'
import IconButton from '../button/GradientButton1'
import check from '../../assets/icons/check.png'


const NewCard1 = ({ navigation }) => {
    const [isModalVisible2, setModalVisible2] = useState(false);

    const toggleModal2 = () => {
        navigation.navigate('ShowKey');
    };
    return (
        <View style={styles.modalBg1}>
            <View style={styles.borderCenter}>
                <View style={styles.border}></View>
            </View>
            <View style={styles.wallet}>
                <WalletList navigation={navigation} />
            </View>
            <CardB select={select[0]} />
            <View style={{ backgroundColor: '#F3F2F3', borderRadius: 10, }}>
                <CardB select={select[2]} toggleModal1={toggleModal2}>

                    {
                        data1.map((item, index) => {
                            return (
                                <GradientButton title={navigation} key={index} item={item} />
                            )
                        })
                    }

                </CardB>
                <View style={styles.button}> 
                    <IconButton text='primry wallet' color='green' bgColor='white' image={check} border='green' />
                </View>
            </View>


        </View>
    )
}
export default NewCard1
