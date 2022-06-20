import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { styles } from './CardBStyle'
import { select1 } from '../../constant/constant'


const SelectCard = ({ select, children }) => {
    return (
        <View style={styles.bgColor1}>
            <View style={styles.flex}>
                <Image style={styles.image} source={select1.image} />
                <View style={styles.iconFlex}>
                    <View>
                        <Text style={styles.title}>{select1.title}</Text>
                        <Text style={styles.text}>{select1.date}</Text>
                    </View>
                    <View style={styles.iconBg}>
                        <Image style={styles.icon} source={select1.icon1} />
                    </View>
                </View>

            </View>
            <Text style={styles.blance}>{select1.blance}</Text>
            <Text style={styles.number}>{select1.coins}</Text>
            <Text style={styles.text}>{select1.mint}</Text>
            <View style={styles.aligns}>
                <View style={styles.flex}>
                    <Text style={styles.text}>{select1.id}</Text>
                    <Text style={styles.copy}>Copy</Text>
                    <Image source={select1.icon} />
                </View>
                <Text style={styles.bundle}>{select1.bundal}</Text>
            </View>
            
        </View>
    )
}

export default SelectCard
