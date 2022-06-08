import { StyleSheet,TextInput,ScrollView,SafeAreaView, Text, View , Image} from 'react-native'
import React from 'react'
import {styles} from './LogInStyle'
import Button from '../../compnent/button/Button'
// import icon  from '../../assets/icon/Icon.png'
// import icon1 from '../../assets/icon/hidden.png'


const Profile = ({navigation}) => {
  return (
    <ScrollView style={styles.container}>
    <SafeAreaView />

    <View style={styles.title_view}>
      <Text style={styles.title}>Log in</Text>
      <Text style={styles.title}>to continue</Text>
<Text style={styles.input_title}>Email Address</Text>
      <TextInput style={styles.input} 
        placeholder="Enter email"
      />
      {/* <Image style={styles.image} source={icon} alt="icon" /> */}

        <TextInput style={styles.passWord_input}
        placeholder="Enter password"
      />
      {/* <Image style={styles.image} source={icon1} alt="icon" /> */}

      <Text style={styles.forget} >Forget your password</Text>
      <View style={styles.button}>
      <Button click={()=>navigation.navigate('SignUp')} text='LogIn' width={261} />
      </View>
      <Text style={styles.user}>
      New User?
      </Text>
<Text style={styles.account}>Create an account</Text>
    </View>
    </ScrollView>
  )
}

export default Profile

