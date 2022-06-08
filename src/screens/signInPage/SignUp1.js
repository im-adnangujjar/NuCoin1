import { StyleSheet, Text, View, ScrollView, SafeAreaView, TextInput } from 'react-native'
import React from 'react'
import {styles} from './SignUp1Style'
import Button from '../../compnent/button/Button'

const SignUp1 = ({navigation}) => {
  return (
    <ScrollView style={styles.container}>
      <SafeAreaView />

      <View style= {styles.subContainer}>
        <Text style={styles.title}>Sign up</Text>
        <Text style={styles.title}>to continue</Text>
        <Text style={styles.lable}>Phone Number</Text>
        <TextInput style={styles.input} placeholder="" />
        <Text style={styles.lable}>Email</Text>
        <TextInput style={styles.input} placeholder="" />
        <Text style={styles.lable}>Password</Text>
        <TextInput style={styles.input} placeholder="" />
        <Text style={styles.lable}>Confirm Password</Text>
        <TextInput style={styles.input} placeholder="" />
        <View style={styles.buttons}>
          <Button text='Back' width='45%' bgColor='#F3F3F3' color='black' />
          <Button click={() => navigation.navigate('Wallet')} text='Sign Up' width='45%' />
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

