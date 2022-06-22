import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white'

    },
    subContainer: {
        marginHorizontal: 24,

    },
    bar: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 50,
    },
    image: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    image_margin: {
        marginRight: 23
    },
    text: {
        fontFamily:'Poppins-Regular',
        fontSize: 24,
        fontWeight: '700',
        textAlign: 'center',
        marginTop: 67,
        color: 'green'
    },
    image_center: {
        marginTop: 60,
        marginBottom: 35,
        flexDirection: 'row',
        justifyContent: 'center',
        alignContent: 'center'
    },
    jone:{
color:'green',
    },
    title: {
        fontFamily:'Poppins-Regular',
        textAlign: 'center',
        fontWeight: '400',
        marginBottom:10,
        fontSize: 18,
        color:'black',
    },
    button: {
        marginTop: 85,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    }

})