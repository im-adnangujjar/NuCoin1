import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { styles } from './UploadImageCardStyle'

const UploadImageCard = ({ kycUpload }) => {
    return (
        <View>
            <Text style={styles.title}>{kycUpload.title}</Text>
            <View style={styles.ImageBg}>
                {/* <Image source={kycUpload.img} /> */}

                <Text style={styles.upload}>{kycUpload.text}</Text>
            </View>
           

        </View>
    )
}

export default UploadImageCard
