import { StyleSheet, Text, View, ScrollView, SafeAreaView, Image } from 'react-native'
import React from 'react'
import { styles } from './CardAStyle'
import arrow from '../../assets/icons/uparrow.png'

const DashBoardCard= ({dashboard}) => {
    return (
        <ScrollView style={styles.Container} >
            <SafeAreaView />
            <View style={styles.card}>
                <View style={styles.subContainer}>
                    <View style={styles.image}>
                        <Image source={dashboard.image} />
                    </View>
                    <View style={styles.container_margin}>
                        <View style={styles.flex}>
                            <Text style={styles.title}>{dashboard.title}</Text>
                            <Text style={styles.descripation}>{dashboard.days}</Text>
                        </View>
                    <Text style={styles.descripation}>{dashboard.balance}</Text>
                    </View>
                </View>
                <View style={styles.flex1}>
                    <Text style={styles.descripation}>{dashboard.text}</Text>
                    <Text style={styles.descripation}>{dashboard.text}</Text>
            </View>
            </View>

        </ScrollView>
    )
}

export default DashBoardCard
