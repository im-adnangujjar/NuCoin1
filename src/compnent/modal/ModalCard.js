import { View, Text } from 'react-native'
import React from 'react'
import { styles } from './NewCardStyle'
import GradientButton from '../button/GradientButton'
import {select,data1} from '../../constant/constant'
import WalletList from '../walletlist/WalletList'
import CardB from '../card/CardB'

export default function ModalCard({navigation}) {
    return (
        <View style={styles.modalBg}>
            <View style={styles.borderCenter}>
                <View style={styles.border}></View>
            </View>
            <View style={styles.wallet}>
                <WalletList nav={navigation} />
            </View>
            <CardB select={select[0]} >
                {
                    data1.map((item, index) => {
                        return (
                            <GradientButton title={navigation} key={index} item={item} />
                        )
                    })
                }
            </CardB>
            <CardB select={select[1]} />
        </View>
    )
}