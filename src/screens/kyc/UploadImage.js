import { StyleSheet, View, Text, ScrollView, SafeAreaView } from 'react-native'
import React from 'react'
import { styles } from './KycUploadStyle'
import HeaderA from '../../compnent/header/HeaderA'
import KycText from '../../compnent/kycText/kycText'
import Button from '../../compnent/button/Button'
import { upload } from '../../constant/constant'
import UploadImages from '../../compnent/uploadImageCard/UploadImages'

const UploadImage = () => {
    return (
        <ScrollView style={styles.container}>
            <SafeAreaView />
            <View style={styles.subContainer}>
                <HeaderA title='kyc' />
                <KycText />

                {
                    upload.map((item ,index)=> {
                        return(
                            <UploadImages upload={item}/>
                        )
                    })
                }
                <View style={styles.button}>
                    <Button text='Back' width='45%' bgColor='white' color='black' />
                    <Button text='Back' width='45%'/>
                </View>
            </View>
        </ScrollView>
    )
}

export default UploadImage