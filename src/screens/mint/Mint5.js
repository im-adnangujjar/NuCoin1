import { Text, StyleSheet, View, ScrollView, SafeAreaView, Image, TextInput } from 'react-native'
import React, { useState } from 'react'
import { styles } from './Mint5Style'
import Header from '../../compnent/header/Header'
import icon from '../../assets/icons/warning.png'
import CircularProgress from 'react-native-circular-progress-indicator'
import Button from '../../compnent/button/Button'
import logo from '../../assets/images/walletlogo.png'



const Mint5 = ({ navigation }) => {
    const [complet, setComplet] = useState(false)

    return (
        <ScrollView style={styles.container} >
            <SafeAreaView />
            <View style={styles.subContainer}>
                <Header logo={logo} nav={navigation} />
                <Text style={styles.title}>Processing Mint</Text>
                <View style={styles.flex}>
                    <CircularProgress
                        radius={140}
                        value={100}
                        textColor='#222'
                        title='Prossing Mint'
                        titleColor='black'
                        titleFontSize={25}
                        valueSuffix={'%'}
                        inActiveStrokeColor={'green'}
                        inActiveStrokeOpacity={0.2}
                        inActiveStrokeWidth={20}
                        duration={3000}
                        onAnimationComplete={() => setComplet(true)}
                    />
                </View>

                {/* <Statusbar style={"auto"} />  */}
                <View style={styles.align}>
                    {complet === true ?

                        <Button onPress={() => navigation.navigate('DashBoard')} text='Close' width="100%" />
                        :
                        <View style={styles.center}>
                            <Image style={styles.icon} source={icon} />
                            <Text style={styles.text}> Please don’t do any activities while processing the mint to avoid error.</Text>
                        </View>
                    }
                </View>
            </View>
        </ScrollView>
    )
}
export default Mint5
