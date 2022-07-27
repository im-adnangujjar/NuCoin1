import { StyleSheet, Text, View, ScrollView, SafeAreaView, Image } from 'react-native'
import React from 'react'
import { styles } from './KycStyles'
// import HeaderA from '../../compnent/header/HeaderA'
// import KycText from '../../compnent/kycText/kycText'
import KycInput from '../../compnent/kycInput,/KycInput'
import { kycData } from '../../constant/constant'
// import Button from '../../compnent/button/Button'

const KYc = () => {
    return (
        <View style={styles.container}>
            <ScrollView >
                <SafeAreaView />
                <View style={styles.subContainer}>
                    {/* <HeaderA title='kyc' /> */}
                    {/* <KycText /> */}

                    {/* <Text style={styles.title}>Personal Details</Text> */}
                    {
                        kycData.map((item) => {
                            return (
                                <KycInput kycData={item} />
                            )
                        })
                    }
                    {/* <View style={styles.button}>
                    <Button text='Next' width='100%' />

                    </View> */}
                </View>
            </ScrollView>
        </View>
    )
}

export default KYc
