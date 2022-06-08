import { StyleSheet, Text, View, SafeAreaView, Image, ScrollView, TextInput } from 'react-native'
import React from 'react'
import { style } from './SplashScreenStyle'
import logo from '../../assets/images/logo.png'
import bgLogo from '../../assets/images/backgroundLogo.png'
import Button from '../../compnent/button/Button'

const SplashScreen = ({navigation}) => {
    return (
        <ScrollView style={style.container}>
            <SafeAreaView />
            {/* <ImageBackground source={bgLogo} resizeMode="cover" ></ImageBackground> */}
            <Image source={bgLogo}  alt="Logo"/>
            <View style={style.Text}>
                <Image source={logo}  alt="Logo"/>
                <View>
                    <Text style={style.welcom}>welcome to</Text>
                    <Text style={style.nuCion}>NuCoin</Text>
                </View>
                <View>
                    <Text style={style.text}>The world's first decentralized blockchain inspired by</Text>
                    <Text style={style.artificial}>Artificial Intellegence</Text>
                </View>
                <View style={style.button_margin}>
                    <Button click={() => navigation.navigate('RaceDetail')} text='start Now' width={261} />
                </View>
                <View><Text style={style.text}>NuCoin by NuGenesis</Text></View>
                <View>
                    <Text style={style.agree}>I have read and agreed to</Text>
                    <Text style={style.terms}>Terms and Conditions <Text style={style.color}>and </Text>Privacy Policy</Text>
                </View>
            </View>
        </ScrollView>
    )
}
export default SplashScreen

