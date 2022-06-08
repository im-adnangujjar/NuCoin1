import { StyleSheet, Text, View,Image } from 'react-native'
import {styles} from './HeaderStyle'
import logo from '../../assets/images/walletlogo.png'
import image from '../../assets/images/person.png'
import icon1 from '../../assets/icons/notification.png'

import React from 'react'

const Header = () => {
    return (
            <View style={styles.bar}>
                <Image source={logo} />
                <View style={styles.image}>
                    <Image style={styles.image_margin} source={icon1} />
                    <Image source={image} />
                </View>
            </View>
        
    )
}

export default Header
