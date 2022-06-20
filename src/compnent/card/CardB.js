import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { styles } from './CardBStyle'



const CardB = ({ select, toggleModal1 = () => { }, totoggleModal2, children }) => {

    return (
        <View style={styles.bgColor}>
            <View style={styles.flex}>
                <Image style={styles.image} source={select.image} />
                <View style={styles.iconFlex}>
                    <View>
                        <Text style={styles.title}>{select.title}</Text>
                        <Text style={styles.text}>{select.date}</Text>
                    </View>
                    <TouchableOpacity onPress={() => toggleModal1('select.click')}>
                        <View style={styles.iconBg}>
                            <Image style={styles.icon} source={select.icon1} />
                        </View>
                    </TouchableOpacity>
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
            {
                children && <View style={styles.buttons}>
                    {children}
                </View>
            }
        </View>
    )
}
export default CardB
