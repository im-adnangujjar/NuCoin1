import { StyleSheet , View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import icon from '../../assets/icons/wallet.png'

function IconButton(props) {
    const styles = StyleSheet.create({
        button: {
            backgroundColor: props.bgColor || 'blue',
            borderRadius: 10,
            width: props.width || 200,
            height: props.height || 50,
            borderWidth: 1,
            borderColor:props.border||'#E7E7E7',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center'
        },
        button_text: {
            color: props.color || 'white'
        },
        image: {
        tintColor:props.imageColor||'green',
        marginRight:10,
        }
    })
    return (
        <TouchableOpacity onPress={props.click} style={styles.button}>
        
            <Image style={styles.image} source={props.image} />
            <Text style={styles.button_text} >
                {props.text}
            </Text>
        </TouchableOpacity>
    )
}
export default IconButton