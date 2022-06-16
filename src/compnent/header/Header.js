import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import { styles } from './HeaderStyle'
import logo from '../../assets/images/walletlogo.png'
import image from '../../assets/images/person.png'
import icon1 from '../../assets/icons/notification.png'

import React from 'react'

const Header = (props) => {
    return (
        <View style={styles.bar}>
            <Image source={logo} />
            <View style={styles.image}>
                <TouchableOpacity onPress={() => props.nav.navigate('Notification')}>
                    <Image style={styles.image_margin} source={icon1} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => props.nav.navigate('profile')}>
                    <Image source={image} />
                </TouchableOpacity>

            </View>
        </View>

    )
}

export default Header
