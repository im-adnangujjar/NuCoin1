import {
  StyleSheet,
  TextInput,
  ScrollView,
  SafeAreaView,
  Text,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {styles} from './LogInStyle';
import icon from '../../assets/icons/check1.png';
import icon1 from '../../assets/icons/eye.png';
import GradientButton1 from '../../compnent/button/GradientButton1';

const Profile = ({navigation}) => {
  return (
    <ScrollView>
      <SafeAreaView />
      <View style={styles.container}>
        <View style={styles.title_view}>
          <Text style={styles.title}>Log in</Text>
          <Text style={styles.title}>to continue</Text>
          <Text style={styles.input_title}>Email Address</Text>
          <View>
            <TextInput style={styles.input} placeholder="jhondoe@mail.com" />
            <Image style={styles.image} source={icon} alt="icon" />
          </View>
          <View>
            <TextInput
              style={styles.passWord_input}
              placeholder="Enter password"
            />
            <View style={styles.image}>
              <Image style={styles.iconImage} source={icon1} alt="icon" />
            </View>
          </View>
          <Text style={styles.forget}>Forgot your password?</Text>
          <View style={styles.button}>
            <GradientButton1
              click={() => navigation.navigate('DashBoard')}
              text="Log In"
              width='100%'
            />
          </View>
          <Text style={styles.user}>New User?</Text>
          <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
            <Text style={styles.account}>Create an account</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

export default Profile;
