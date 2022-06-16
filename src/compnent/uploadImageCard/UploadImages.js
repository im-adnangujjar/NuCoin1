import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { styles } from './UploadImagesStyle'

const UploadImages = ({ upload }) => {
    return (
        <View>

<Text style={styles.text}>{upload.title}</Text>
        <View style={styles.bgColor}>
        <View style={styles.flex}>
            <Image source={upload.img} />
            <View>
                <Text style={styles.title}>{upload.title1}</Text>
                <Text style={styles.title}>{upload.text}</Text>
            </View>
        </View>
        </View>
        </View>
    )
}

export default UploadImages
