import { StyleSheet, Text, View, ScrollView, SafeAreaView, Image, TextInput } from 'react-native'
import React from 'react'
import { styles } from './SignUp1Style'
import Button from '../../compnent/button/Button'
import icon1 from '../../assets/icons/eye.png'
import flage from '../../assets/icons/flage.png'



const SignUp1 = ({ navigation }) => {
  return (
    <ScrollView style={styles.container}>
      <SafeAreaView />

      <View style={styles.subContainer}>
        <View style={styles.titleFlex}>
          <View>
            <Text style={styles.title}>Sign up</Text>
            <Text style={styles.title}>to continue</Text>
          </View>
          <Text style={styles.numbers}>01 . <Text style={styles.numbers2}>02</Text></Text>
        </View>
        <Text style={styles.lable}>Phone Number</Text>
        <View>
          <TextInput style={styles.input} placeholder="+44" />
          <Image style={styles.flage} source={flage} />
        </View>
        <Text style={styles.lable}>Email</Text>
        <TextInput style={styles.input} placeholder="" />
        <Text style={styles.lable}>Password</Text>
        <View>
          <TextInput style={styles.input} placeholder="" />
          <Image style={styles.image} source={icon1} alt="icon" />
        </View>
        <Text style={styles.lable}>Confirm Password</Text>

        <View>
          <TextInput style={styles.input} placeholder="" />
          <Image style={styles.image} source={icon1} alt="icon" />
        </View>
        <View style={styles.buttons}>
          <Button onPress={() => navigation.goBack('RaceDetail')} text='Back' width='45%' bgColor='#F3F3F3' color='black' />
          <Button onPress={() => navigation.navigate('RaceDetail')} text='Sign Up' width='45%' />
        </View>

        <Text style={styles.account}>Already have an account?</Text>
        <Text style={styles.log}>Log In</Text>
        <Text style={styles.agree}>I have read and agreed to</Text>
        <Text style={styles.terms}>Terms and Conditions <Text style={styles.color}>and </Text>Privacy Policy</Text>
      </View>
    </ScrollView>
  )
}

export default SignUp1

