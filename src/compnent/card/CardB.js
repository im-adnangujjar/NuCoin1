import { StyleSheet, Text, View, Image, } from 'react-native'
import React from 'react'

const CardB = () => {
    return (
        <View>
            <Image source={selectCard.image} />
            <Text>{selectCard.title}</Text>
            
        </View>
    )
}

export default CardB

const styles = StyleSheet.create({})