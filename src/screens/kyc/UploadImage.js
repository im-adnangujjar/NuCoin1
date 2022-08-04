import { StyleSheet, View, Text, ScrollView, SafeAreaView } from 'react-native'
import React from 'react'
import { styles } from './KycUploadStyle'
import HeaderA from '../../compnent/header/HeaderA'
import KycText from '../../compnent/kycText/kycText'
import Button from '../../compnent/button/Button'
import { upload } from '../../constant/constant'
import UploadImages from '../../compnent/uploadImageCard/UploadImages'
import GradientButton1 from '../../compnent/button/GradientButton1'  
import kyc from '../../assets/icons/kycIcon.png'

const UploadImage= ({navigation}) => {
    return (
        <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
            <SafeAreaView />
            <View style={styles.subContainer}>
                <HeaderA title='KYC'bgColor='#F3F2F3' Nav={navigation} />
                <KycText text='Verication Icompleted' number1='04 . 'number2='04' image={kyc} bgColor='#F3F2F3' width={15} />
                <Text style={styles.descripation}>Your KYC is <Text style={styles.text}>not yet complete.</Text>  Please make sure that all you’re id’s and photo you provide from us are succesfully validated.
</Text>
                {
                    upload.map((item, index) => {
                        return (
                            <UploadImages photoWarning={true} upload={item} />
                        )
                    })
                }
                <View style={styles.button}>
                    <Button  onPress={()=>navigation.goBack()}text='Back' width='45%' bdColor='#E7E7E7' bdWidth={1} bgColor='white' color='black' height={54} />
                    <GradientButton1 click={()=>navigation.navigate('tabs')} height={54}  text='Next' width='45%'/>
                </View>
            </View>
        </ScrollView>
    )
}

export default  UploadImage