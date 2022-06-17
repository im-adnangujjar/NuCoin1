import { StyleSheet, Text, View, SafeAreaView, ScrollView, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { styles } from './MenuStyle'
import person from '../../assets/images/person.png'
import more from '../../assets/icons/more.png'
import moon from '../../assets/icons/moon.png'
import off from '../../assets/icons/off.png'
import user from '../../assets/icons/user-check.png'
import logout from '../../assets/icons/log-out.png'
import HeaderA from '../../compnent/header/HeaderA'

const Menu = ({navigation}) => {
    return (
        <ScrollView style={styles.container}>
            <SafeAreaView />
            <View style={styles.subContainer}>
                <HeaderA title="Menu" Nav={navigation} />
                <Text style={styles.title}>Account</Text>
                <View style={styles.flex}>
                    <Image style={styles.image} source={person} />
                    <View style={styles.icon_flex}>
                        <View >
                            <Text style={styles.name}>Jhon Doe</Text>
                            <Text style={styles.information}>Personal Info</Text>
                        </View>
                        <TouchableOpacity onPress={() => navigation.navigate('PersonalInformation')}>
                            <View style={styles.iconBg}>
                                <Image source={more} />
                            </View>
                        </TouchableOpacity>

                    </View>
                </View>

                <Text style={styles.title}>
                    Setting
                </Text>
                <View style={styles.kyc_flex}>
                    <View style={styles.text_flex}>
                        <View style={styles.icon_bg}>
                            <Image source={moon} />
                        </View>
                        <Text style={styles.text}>Dark Mood</Text>
                    </View>
                    <View style={styles.text_flex}>
                        <Text style={styles.off_button}>Off</Text>
                        <Image style={styles.button_image} source={off} />
                    </View>
                </View>
                <View style={styles.kyc_flex}>

                    <View style={styles.text_flex}>
                        <View style={styles.icon_bg}>
                            <Image source={user} />
                        </View>
                        <TouchableOpacity onPress={() => navigation.navigate('Kyc')}>
                            <Text style={styles.text}>KYC</Text>
                        </TouchableOpacity>
                    </View>
                    <Image source={more} />
                </View>
                <TouchableOpacity onPress={() => navigation.navigate('SplashScreen')}>

                    <View style={styles.button}>
                        <Image source={logout} />
                        <Text style={styles.log}> Log out</Text>
                    </View>
                </TouchableOpacity>

            </View>
        </ScrollView>

    )
}

export default Menu
