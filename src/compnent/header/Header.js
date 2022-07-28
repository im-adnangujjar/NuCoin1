import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import { styles } from './HeaderStyle'
import image from '../../assets/images/person.png'
import icon1 from '../../assets/icons/notification.png'

import React from 'react'

const Header = (props) => {
    return (
        <View style={styles.bar}>
            <Image source={props.logo} />
            <View style={styles.images}>
                <TouchableOpacity onPress={() => props.nav.navigate('Notification')}>
                    <Image style={styles.image_margin} source={icon1} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => props.nav.navigate('profile')}>
                    <Image style={styles.image} source={image} />
                </TouchableOpacity>

            </View>
        </View>

    )
}

export default Header
