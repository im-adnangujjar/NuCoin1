import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import LinearGradient from 'react-native-linear-gradient';


function GradientButton1(props) {
    const styles = StyleSheet.create({
        linearGradient: {
            // backgroundColor: props.bgColor || 'blue',
            borderRadius: 10,
            width: '100%',
            height: props.height || 50,
            borderWidth: 1,
            borderColor: props.border || '#E7E7E7',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center'
        },
        button_text: {
            color: props.color || 'white',
            fontFamily:'Poppins-Medium'
        },
        image: {
            tintColor: props.imageColor || 'green',
            marginRight: 10,
        },
    })
    return (
        <TouchableOpacity style={{width:props.width}} onPress={props.click} >
            <LinearGradient start={{ x: 1, y: 2 }} end={{ x: 0, y: 0 }} colors={props.colors || ['#508ADF','#1E61C6' ]} style={styles.linearGradient}>
                {/* <Image style={styles.image} source={props.image} /> */}
                <Text style={styles.button_text} >
                    {props.text}
                </Text>
            </LinearGradient>

        </TouchableOpacity>
    )
}
export default GradientButton1