import React from 'react';
import { View, Text } from 'react-native'
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
import CoinA from '../screens/coin/CoinA'
import SendCoin from '../screens/coin/SendCoin'
import History from '../screens/history/History';
import Menu from '../screens/menu/Menu'
import ShowKey from '../screens/showKey/ShowKey';
import ShowKey2 from '../screens/showKey/ShowKey2';
import ShowKey3 from '../screens/showKey/ShowKey3'
import ShowKey4 from '../screens/showKey/ShowKey4'
import Kyc from '../screens/kyc/KYc'
import Kyc1 from '../screens/kyc/Kyc1';
import UploadImage from '../screens/kyc/UploadImage'
import Notification from '../screens/notification/Notification'
import Notification1 from '../screens/notification/Notification1'
import Notification2 from '../screens/notification/Notification2'
import HeaderA from '../compnent/header/HeaderA';
import Mint from '../screens/mint/Mint'
import Mint2 from '../screens/mint/Mint2'
import Mint3 from '../screens/mint/Mint3'
import Mint4 from '../screens/mint/Mint4'
import Mint5 from '../screens/mint/Mint5'
import KycText from '../compnent/kycText/kycText'
import KycUpload from '../screens/kyc/KycUpload'
import SelectCard from '../compnent/card/SelectCard'
import PersonalInformation from '../screens/personalInformation/PersonalInformation'
import IconButton from '../compnent/button/IconButton';





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
                {/* <Stack.screen name="Button" component={IconButton}/> */}
                {/* <Stack.Screen name="Select" component={SelectCard} /> */}
                <Stack.Screen name="SplashScreen" component={SplashScreen} />
                <Stack.Screen name="RaceDetail" component={LogIn} />
                <Stack.Screen name="SignUp1" component={SignUp1} />
                <Stack.Screen name="Wallet" component={Wallet} />
                <Stack.Screen name="Wallet2" component={Wallet2} />
                <Stack.Screen name="Wallet3" component={Wallet3} />
                <Stack.Screen name="SignUp" component={SignUp} />
                <Stack.Screen name="LastWallet" component={LastWallet} />
                <Stack.Screen name="DashBoard" component={DashBoard} />
                <Stack.Screen name="profile" component={Menu} />
                <Stack.Screen name="PersonalInformation" component={PersonalInformation} />
                <Stack.Screen name="Notification" component={MyTabs} />
                <Stack.Screen name="History" component={History} />
                <Stack.Screen name="Coin" component={Coin} />
                <Stack.Screen name="CoinA" component={CoinA} />
                <Stack.Screen name="ShowKey" component={ShowKey} />
                <Stack.Screen name="SendCoin" component={SendCoin} />
                <Stack.Screen name="ShowKey2" component={ShowKey2} />
                <Stack.Screen name="ShowKey3" component={ShowKey3} />
                <Stack.Screen name="ShowKey4" component={ShowKey4} />
                <Stack.Screen name="Mint" component={Mint} />
                <Stack.Screen name="Mint2" component={Mint2} />
                <Stack.Screen name="Mint3" component={Mint3} />
                <Stack.Screen name="Mint4" component={Mint4} />
                <Stack.Screen name="Mint5" component={Mint5} />
                <Stack.Screen name="Kyc" component={Tabs} />


            </Stack.Navigator>
        </NavigationContainer>
    );
}
export default Navigation;



function Tabs({ navigation }) {
    return (
        < >
            <View style={{ paddingLeft: 19, backgroundColor: 'white', paddingBottom: 40 }}>
                <HeaderA title='Kyc' Nav={navigation} />
                {/* <Text >Kyc Verification</Text>
                <Text>Verification complite</Text> */}
                <KycText />
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
                    component={Kyc}
                    options={{ tabBarLabel: 'Personal Details' }}
                />
                <Tab.Screen
                    name="Notifications"
                    component={Kyc1}
                    options={{ tabBarLabel: 'Address' }}
                />
                <Tab.Screen
                    name="trdfg"
                    component={UploadImage}
                    options={{ tabBarLabel: 'IDs`' }}
                />

            </Tab.Navigator>
        </>
    );
}
function MyTabs({ navigation }) {
    return (
        < >
            <View style={{ paddingLeft: 19, backgroundColor: 'white', paddingBottom: 67 }}>
                <HeaderA title='Kyc' Nav={navigation} />
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