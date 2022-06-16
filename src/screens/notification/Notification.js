import { StyleSheet, Text, View, ScrollView, SafeAreaView, Image } from 'react-native'
import React from 'react'
import { styles } from './NotificationStyle'
import HeaderA from '../../compnent/header/HeaderA'
import image from '../../assets/images/notification-off.png'

const Notification = () => {
    return (
        <ScrollView style={styles.container} >
            <SafeAreaView />
            <View style={styles.subContainer}>
                <View style={styles.imageCenter}>
                    <Image style={styles.image} source={image} />
                </View>
                <Text style={styles.text}>Currently, there is no  notification</Text>
            </View>
        </ScrollView>
    )
}
export default Notification
