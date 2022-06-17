import { StyleSheet, Text, View, ScrollView, SafeAreaView } from 'react-native'
import React from 'react'
import { styles } from './kyc1.Style'
// import HeaderA from '../../compnent/header/HeaderA'
// import KycText from '../../compnent/kycText/kycText'
import { kycData1 } from '../../constant/constant' 
import KycInput1 from '../../compnent/kycInput,/KycInpt1'
// import Button from '../../compnent/button/Button'
const Kyc1 = () => {
    return (
        <ScrollView style={styles.container}>
            <SafeAreaView />
            <View style={styles.subContainer}>
                {/* <HeaderA title='kyc' /> */}
                {/* <KycText /> */}

                {/* <Text style={styles.title}>Address</Text> */}
                {
                    kycData1.map((item) => {
                        return (
                            <KycInput1 kycData1={item} />
                        )
                    })
                }
                {/* <View style={styles.button}>
                    <Button text='Next' width='45%' />
                    <Button text='Next' width='45%' />
                </View> */}
            </View>
        </ScrollView>
    )
}

export default Kyc1
