import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { styles } from './KycTextStyle'

export default function kycText(props) {
    return (
        <View>
            <View style={styles.imageFlex}>
                <Text style={styles.title} >KYC Verification</Text>
                <View style={[styles.iconBg  , {backgroundColor:props.bgColor}]}>
                    <Image style={styles.check} source={props.image} />
                </View>

            </View>
            <View style={styles.flex}>
                <Text style={styles.descripation}>Verication completed</Text>
                <Text style={styles.text}>{props.number1}<Text style={styles.descripation}>{props.number2}</Text></Text>
            </View>
        </View>
    )
}
