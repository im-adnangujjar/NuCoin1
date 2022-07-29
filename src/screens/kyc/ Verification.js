import { StyleSheet, View, Text, ScrollView, SafeAreaView } from 'react-native'
import React from 'react'
import { styles } from './KycUploadStyle'
import Button from '../../compnent/button/Button'
import { upload } from '../../constant/constant'
import UploadImages from '../../compnent/uploadImageCard/UploadImages'
import GradientButton1 from '../../compnent/button/GradientButton1'

const  Verification = ({navigation}) => {
    return (
        <ScrollView style={styles.container}>
            <SafeAreaView />
            <View style={styles.subContainer}>
              
            
                <Text style={styles.descripation}>Your KYC is complete. Now you can proceed with further operation on our website like, you can create and  access wallet.</Text>
                {
                    upload.map((item, index) => {
                        return (
                            <UploadImages upload={item} />
                        )
                    })
                }
                
            </View>
        </ScrollView>
    )
}

export default  Verification