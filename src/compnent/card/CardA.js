import { StyleSheet, Text, View, ScrollView, SafeAreaView, Image } from 'react-native'
import React from 'react'
import { styles } from './CardAStyle'
import arrow from '../../assets/icons/uparrow.png'

const CardA = ({card}) => {
    return (
        <ScrollView style={styles.Container} >
            <SafeAreaView />
            <View style={styles.card}>
                <View style={styles.subContainer}>
                    <View style={styles.image}>
                        <Image style={styles.arrow} source={arrow} />
                    </View>
                    <View style={styles.container_margin}>
                        <View style={styles.flex}>
                            <Text style={styles.title}>{card.title}</Text>
                            <Text style={styles.descripation}>{card.days}</Text>
                        </View>
                    <Text style={styles.descripation}>{card.balance}</Text>
                    </View>
                </View>
                <View style={styles.flex1}>
                    <Text style={styles.descripation}>{card.text}</Text>
                    <Text style={styles.descripation}>{card.text1}</Text>
            </View>
            </View>

        </ScrollView>
    )
}

export default CardA
