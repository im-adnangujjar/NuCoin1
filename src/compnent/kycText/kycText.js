import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import check from '../../assets/icons/check.png'
import { styles } from './KycTextStyle'

export default function kycText() {
    return (
        <View>
            <View style={styles.imageFlex}>
                <Text style={styles.title} >KYC Verification</Text>
                <View style={styles.iconBg}>
                    <Image source={check} />
                </View>

            </View>
            <View style={styles.flex}>
                <Text style={styles.descripation}> Verication completed</Text>
                {/* <Text style={styles.text}>0.1 .<Text style={styles.descripation}>04</Text></Text> */}
            </View>
        </View>
    )
}
