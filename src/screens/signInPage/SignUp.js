import {
  StyleSheet,
  ScrollView,
  SafeAreaView,
  Text,
  View,
  TextInput,
  Image,
} from 'react-native';
import {styles} from './SignUpStyle';
import React, {useState} from 'react';
import Button from '../../compnent/button/Button';
import date from '../../assets/icons/calendar.png';
import check from '../../assets/icons/check.png';
import IconButton from '../../compnent/button/IconButton';
import GradientButton1 from '../../compnent/button/GradientButton1';

const SignIn = ({navigation}) => {
  const [active, setActive] = useState('male');

  return (
    <ScrollView style={styles.container}>
      <View style={styles.subContainer}>
        <SafeAreaView />
        <View style={styles.titleFlex}>
          <View>
            <Text style={styles.title}>Sign up</Text>
            <Text style={styles.title}>to continue</Text>
          </View>
          <Text style={styles.numbers}>
            01 . <Text style={styles.numbers1}>02</Text>
          </Text>
        </View>
        <Text style={styles.lable}>User Name</Text>
        <TextInput style={styles.input} placeholder="jhondoe@mail.com" placeholderTextColor={'black'} />
        <Text style={styles.lable}>First Name</Text>
        <TextInput style={styles.input} placeholder="" />
        <Text style={styles.lable}>Last Name</Text>
        <TextInput style={styles.input} placeholder="" />
        <Text style={styles.lable}>Birthdate</Text>
        <View>
          <TextInput style={styles.input} placeholder="" />
          <Image style={styles.image} source={date} />
        </View>

        <Text style={styles.lable}>Select Gender</Text>
        <View style={styles.buttons}>
          <IconButton
            text="Male"
            width="48%"
            height={40}
            color={active === 'male' ? 'white' : 'black'}
            colors={
              active === 'male' ? ['#508ADF', '#1E61C6'] : ['white', 'white']
            }
            click={() => setActive('male')}
            iconColor="white"
            icon={active === 'male' ? check : ''}
            marginRight={active==='male' ? '10%' :''}

          />
          <IconButton
            text="Female"
            width="48%"
            height={40}
            color={active === 'female' ? 'white' : 'black'}
            colors={
              active === 'female' ? ['#508ADF', '#1E61C6'] : ['white', 'white']
            }
            click={() => setActive('female')}
            iconColor="white"
            icon={active === 'female' ? check : ''}
            marginRight={active==='female' ? '10%' :''}
          />
        </View>
        <GradientButton1
          click={() => navigation.navigate('SignUp1')}
          text="Next"
          width="100%"
        />
        <Text style={styles.account}>Already have an account?</Text>
        <Text style={styles.log}>Log In</Text>
      </View>
    </ScrollView>
  );
};

export default SignIn;
