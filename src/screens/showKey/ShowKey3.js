import { StyleSheet, Text, View, ScrollView, SafeAreaView, Image, TextInput } from 'react-native'
import React,{useState} from 'react'
import { styles } from './ShowKey3Style'
import Header from '../../compnent/header/Header'
import Button from '../../compnent/button/Button'
import logo from '../../assets/images/walletlogo.png'
import GradientButton1 from '../../compnent/button/GradientButton1'


const ShowKey3 = ({ navigation }) => {
const [otp, setOtp] = useState('')
const [error,setError] = useState(false)

    return (
        <ScrollView style={styles.container} >
            <SafeAreaView />
            <View style={styles.subContainer}>
                <Header logo={logo} nav={navigation} />
                <View style={styles.flex}>
                    <Text style={styles.title}>Enter the OTP you
                        recieved in your email</Text>
                    <Text style={styles.numbers}>02. <Text style={styles.numbers1}>03</Text></Text>
                </View>
                <TextInput onChangeText={(v)=>setOtp(v)} style={styles.input} placeholder='Enter OTP code' placeholderTextColor={'black'} />
               {error && <Text style={styles.descripation1}>Please enter the 6 digit OTP code!</Text> }
                <Text style={styles.descripation}>Didn’t recieved the code?<Text style={styles.again}>Send Again</Text></Text>
            
                <View style={styles.button}>
                    <Button onPress={() => navigation.navigate('DashBoard')} text='Close' color='black' bgColor='#F3F3F3' width='45%' />

                    <GradientButton1 click={() => {
                        if(otp === ""){
                            setError(true)
                        }else{
                            setError(false)  
                            navigation.navigate('ShowKey4')
                        }

                    }} text='Proceed' width='45%' height={57}/>
                </View>
            </View>
        </ScrollView>
    )
}
export default ShowKey3
