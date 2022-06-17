import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
    bgColor: {
        backgroundColor: '#F3F2F3',
        width: '100%',
        height: 186,
        marginBottom: 20,
        paddingLeft: 24,
        paddingTop: 24,
        borderRadius:10
    },
    flex: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    image: {
        marginRight: 10
    },
    title: {
        // fontFamily: Poppins
        fontSize: 14,
        fontWeight: '500',
        color: 'black',
    },
    text: {
        // font-family: Poppins
        fontSize: 10,
        fontWeight: '500',
        color: 'black'
    },
    blance: {
        // font-family: Poppins
        fontSize: 10,
        fontWeight: '400',
        color: 'black',
        marginTop: 13,
    },
    number: {
        // font-family: Poppins;
        fontSize: 20,
        fontWeight: '700',
        color: 'black',
        marginTop: 5,
        marginBottom: 18,

    },
    copy: {
        // font-family: Poppins;
        fontSize: 10,
        fontWeight: '400',
        color:'black',
        marginLeft:18,
        marginRight:4,
    },
    aligns:{
        flexDirection: 'row',
        alignItems: 'center',
        marginTop:8
    },
    bundle:{
        // font-family: Poppins;
        fontSize: 12,
        fontWeight: '500',
        color:'black',
        marginLeft:70,
    }
})
