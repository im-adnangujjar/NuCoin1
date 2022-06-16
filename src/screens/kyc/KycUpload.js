import { View, Text, ScrollView, SafeAreaView } from 'react-native'
import React from 'react'
import { styles } from './KycUploadStyle'
import HeaderA from '../../compnent/header/HeaderA'
import KycText from '../../compnent/kycText/kycText'
import { kycUpload } from '../../constant/constant'
import UploadImageCard from '../../compnent/uploadImageCard/UploadImageCard'
import Button from '../../compnent/button/Button'

const KycUpload = () => {
    return (
        <ScrollView style={styles.container}>
            <SafeAreaView />
            <View style={styles.subContainer}>
                <HeaderA title='kyc' />
                <KycText />
                {
                    kycUpload.map((item, index) => {
                        return (
                            <UploadImageCard kycUpload={item} />
                        )
                    })
                }
                <View style={styles.button}>
                    <Button text='Back' width='45%' bgColor='white' color='black' />
                    <Button text='Next' width='45%' />
                </View>

            </View>
        </ScrollView>

    )
}

export default KycUpload