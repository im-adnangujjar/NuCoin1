import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { styles } from './UploadImagesStyle'
import { ScrollView } from 'react-native-gesture-handler'

const UploadImages = ({ upload }) => {
    return (
        <ScrollView>
            <Text style={styles.text}>{upload.title}</Text>
            <View style={styles.bgColor}>
                <View style={styles.iconflex}>
                    <View style={styles.flex}>
                        <Image source={upload.img} />
                        <View>
                            <Text style={styles.title}>{upload.title1}</Text>
                            <Text style={styles.title}>{upload.text}</Text>
                        </View>
                    </View>
                    <View style={styles.iconBg}>
                        <Image source={upload.icon} />
                    </View>
                </View>
            </View>
        </ScrollView>
    )
}

export default UploadImages
