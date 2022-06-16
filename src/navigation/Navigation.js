import React from 'react';
import { View } from 'react-native'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SplashScreen from '../screens/saplashScreen/SplashScreen';
import LogIn from '../screens/logInPage/LogIn'
import SignUp from '../screens/signInPage/SignUp';
import SignUp1 from '../screens/signInPage/SignUp1';
import Wallet from '../screens/wallet/Wallet';
import Wallet2 from '../screens/wallet/Wallet2';
import Wallet3 from '../screens/wallet/Wallet3';
import LastWallet from '../screens/wallet/LastWallet.js';
import DashBoard from '../screens/dashboard/DashBoard';
import Coin from '../screens/coin/Coin'
// import CoinA from '../screens/coin/CoinA'
// import SendCoin from '../screens/coin/SendCoin'
import History from '../screens/history/History';
import Menu from '../screens/menu/Menu'
import PersonalInformation from '../screens/personalInformation/PersonalInformation'
import ShowKey from '../screens/showKey/ShowKey';
import ShowKey2 from '../screens/showKey/ShowKey2';
// import Kyc from  '../screens/kyc/KYc'
import Kyc1 from '../screens/kyc/Kyc1';
import KycUpload from '../screens/kyc/KycUpload'
import UploadImage from '../screens/kyc/UploadImage'
import Notification from '../screens/notification/Notification'
import Notification1 from '../screens/notification/Notification1'
import Notification2 from '../screens/notification/Notification2'
import HeaderA from '../compnent/header/HeaderA';
import Mint5 from '../screens/mint/Mint5'
import ShowKey3 from '../screens/showKey/ShowKey3'




const Tab = createMaterialTopTabNavigator();
const Stack = createNativeStackNavigator();


function Navigation() {
    return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{
                    headerShown: false
                }}
            >
                <Stack.Screen name="Mint5" component={Mint5} />
                <Stack.Screen name="ShowKey3" component={ShowKey3} />
                {/* <Stack.Screen name="UploadImage" component={UploadImage} /> */}
                {/* <Stack.Screen name="KycUpload" component={KycUpload} /> */}
                {/* <Stack.Screen name="Kyc1" component={Kyc1} /> */}
                {/* <Stack.Screen name="Kyc" component={Kyc} /> */}
                {/* <Stack.Screen name="ShowKey" component={ShowKey} />  */}
                {/* <Stack.Screen name="ShowKey2" component={ShowKey2} />       */}
                {/* <Stack.Screen name="SendCoin" component={SendCoin} /> */}
                {/* <Stack.Screen name="History" component={History} /> */}
                {/* <Stack.Screen name="CoinA" component={CoinA} /> */}
                <Stack.Screen name="SplashScreen" component={SplashScreen} />
                <Stack.Screen name="RaceDetail" component={LogIn} />
                <Stack.Screen name="SignUp1" component={SignUp1} />
                <Stack.Screen name="Wallet" component={Wallet} />
                <Stack.Screen name="Wallet2" component={Wallet2} />
                <Stack.Screen name="Wallet3" component={Wallet3} />
                <Stack.Screen name="Coin" component={Coin} />
                <Stack.Screen name="SignUp" component={SignUp} />
                <Stack.Screen name="LastWallet" component={LastWallet} />
                <Stack.Screen name="DashBoard" component={DashBoard} />
                <Stack.Screen name="profile" component={Menu} />
                <Stack.Screen name="PersonalInformation" component={PersonalInformation} />
                <Stack.Screen name="Notification" component={MyTabs} />

            </Stack.Navigator>
        </NavigationContainer>
    );
}
export default Navigation;



function MyTabs({ navigation }) {
    return (
        < >
            <View style={{ paddingLeft: 19, backgroundColor: 'white', paddingBottom: 67 }}>
                <HeaderA title='Notification' Nav={navigation} />
            </View>
            <Tab.Navigator
                //   initialRouteName="Feed"
                screenOptions={{
                    // tabBarActiveTintColor: '#e91e63',
                    tabBarLabelStyle: { fontSize: 8, fontWeight: '400' },
                    tabBarStyle: { backgroundColor: 'white', elevation: 0, marginRight: 19, marginLeft: 19 },
                }}
                style={{ backgroundColor: 'white', }}

            >
                <Tab.Screen
                    name="Feed"
                    component={Notification}
                    options={{ tabBarLabel: 'Announcements' }}
                />
                <Tab.Screen
                    name="Notifications"
                    component={Notification1}
                    options={{ tabBarLabel: 'All' }}
                />
                <Tab.Screen
                    name="trdfg"
                    component={Notification2}
                    options={{ tabBarLabel: 'Unread' }}
                />

            </Tab.Navigator>
        </>

    );
}
