import { StyleSheet, Text, View, Image, } from 'react-native'
import React from 'react'
import { styles } from './CardBStyle'

const CardB = ({ select }) => {
    return (
        <View style={styles.bgColor}>
            <View style={styles.flex}>
                <Image style={styles.image} source={select.image} />
                <View >
                    <Text style={styles.title}>{select.title}</Text>
                    <Text style={styles.text}>{select.date}</Text>
                </View>
            </View>
            <Text style={styles.blance}>{select.blance}</Text>
            <Text style={styles.number}>{select.coins}</Text>
            <Text style={styles.text}>{select.mint}</Text>
            <View style={styles.aligns}>
                <View style={styles.flex}>
                    <Text style={styles.text}>{select.id}</Text>
                    <Text style={styles.copy}>Copy</Text>
                    <Image source={select.icon} />
                </View>
                <Text style={styles.bundle}>{select.bundal}</Text>
            </View>
        </View>
    )
}
export default CardB
