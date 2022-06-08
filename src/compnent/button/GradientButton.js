import { StyleSheet, Text, View, ScrollView, SafeAreaView, Image } from 'react-native'
import React from 'react'
import {styles} from './GradientButtonStyle'
import LinearGradient from 'react-native-linear-gradient';


const GradientButton = ({item}) => {
    console.log('this is item',item);
    return (
        <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 0, y: 0 }} colors={[item.colorA, item.colorB]} style={styles.linearGradient}>
            <View style={styles.button}>
                <View style={styles.button_align}>
                <Image source={item.icon}/>
                <Text style={styles.button_text} >{item.title}</Text>
                </View>

            </View>
        </LinearGradient>
    )
}

export default GradientButton
