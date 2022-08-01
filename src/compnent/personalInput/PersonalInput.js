import { StyleSheet, Text, View,TextInput } from 'react-native'
import React from 'react'
import { styles } from './PersonalInputStyle'

const PersonalInput = ({input}) => {
    return (
        <View style={styles.lableFlex}>
            <Text style={styles.title}>{input.title}</Text>
            <TextInput style={styles.input} placeholder={input.text} placeholderTextColor={'black'} />
        </View>
    )
}

export default PersonalInput
