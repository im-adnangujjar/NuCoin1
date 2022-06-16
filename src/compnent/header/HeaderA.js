import { StyleSheet, Text, View, Image,TouchableOpacity } from 'react-native'
import React from 'react'

import { styles } from './HeaderAStyle'
import more from '../../assets/icons/more.png'

const HeaderA = (props) => {
  return (
    <View style={styles.display}>
          <TouchableOpacity onPress={() => props.nav.goBack('DashBoard')}>
        <View style={styles.iconBg}>
        <Image source={more}/>
        </View>
        </TouchableOpacity >
      <Text style={styles.title}>{props.title}</Text>
    </View>
  )
}

export default HeaderA
