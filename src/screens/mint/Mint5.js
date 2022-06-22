import { Text, StyleSheet, View, ScrollView, SafeAreaView, Image, TextInput } from 'react-native'
import React, { Component } from 'react'
import { styles } from './Mint5Style'
import Header from '../../compnent/header/Header'
import icon from '../../assets/icons/warning.png'
import CircularProgress from 'react-native-circular-progress-indicator'

const Mint5 = ({ navigation }) => {
    return (
        <ScrollView style={styles.container} >
            <SafeAreaView />
            <View style={styles.subContainer}>
                <Header nav={navigation} />
                <Text style={styles.title}>Processing Mint</Text>
                <View style={styles.flex}>
                <CircularProgress
                    radius={100}
                    value={100}
                    textColor='#222'
                    fontSize={20}
                    valueSuffix={'%'}
                    inActiveStrokeColor={'green'}
                    inActiveStrokeOpacity={0.2}
                    inActiveStrokeWidth={6}
                    duration={3000}
                    // onAnimationComplete={() => setValue(50)}
                />
                </View>

                {/* <statusbar style={"auto"} />  */}
                <View style={styles.align}>
                    <View style={styles.center}>
                        <Image style={styles.icon} source={icon} />
                        <Text style={styles.text}> Please don’t do any activities while processing the mint to avoid error.</Text>
                    </View>
                </View>

            </View>
        </ScrollView>
    )
}
export default Mint5
