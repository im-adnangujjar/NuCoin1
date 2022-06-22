import { StyleSheet, View, Text,TouchableOpacity } from 'react-native'
import React from 'react'
// import {styles} from './ButtonStyle'

function Button(props) {
    const styles = StyleSheet.create({
        button:{
            backgroundColor:props.bgColor||'blue',
            borderRadius:10,
            width:props.width || 200,
            height:props.height || 57,
            borderWidth:1,
            borderColor:'#E7E7E7',
            flexDirection:'row',
            justifyContent:'center',
            alignItems:'center'
        },
        button_text:{
            color:props.color||'white'
                }
    })
    return (
        
        <TouchableOpacity onPress={props.onPress}  style={styles.button}>
            <Text style={styles.button_text} >
                {props.text}
            </Text>
        </TouchableOpacity>
    )
}
export default Button