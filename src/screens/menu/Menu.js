import { StyleSheet, Text, View, SafeAreaView, ScrollView, Image } from 'react-native'
import React from 'react'
import { styles } from './MenuStyle'
import person from '../../assets/images/person.png'
import more from '../../assets/icons/more.png'
import moon from '../../assets/icons/moon.png'
import off from '../../assets/icons/off.png'

const Menu = () => {
    return (
        <ScrollView style={styles.container}>
            <SafeAreaView />
            <View style={styles.subContainer}>
                <Text style={styles.title}>Account</Text>
                <View style={styles.flex}>
                <Image style={styles.image} source={person} />
                <View style={styles.icon_flex}>
                <View >
                    <Text style={styles.name}>Jhon Doe</Text>
                    <Text style={styles.information}>Personal Info</Text>
                </View>
                <Image  source={more} />
                </View>
                </View>

                <Text style={styles.title}>
                    Setting
                </Text>
                <View style={styles.icon_bg}>
                <Image source={moon } />
                </View>
                <Text>Dark Mood</Text>
                <Text>Off</Text>
                <Image source={off} />  
                
            </View>
        </ScrollView>

    )
}

export default Menu
