import { StyleSheet, Platform } from 'react-native'

export const styles = StyleSheet.create({
    container: {
        marginHorizontal: 50,
        paddingTop: Platform.OS === 'ios' ? 146 : 50,
    },

    title: {
        fontFamily:'Poppins-Bold',
        color:'black',
        fontSize: 30,
        fontWeight: '700',
        marginBottom: 10
    },
    input_title: {
        fontFamily:'Poppins-Regular',
        fontSize: 12,
        fontWeight: '400',
        color: '#7B7B7B',
        marginTop: 26,
        marginBottom: 13,
    },
    input: {
        width: '100%',
        height: 40,
        borderColor: 'blue',
        borderBottomWidth: 1,
        fontSize: 14,
        fontWeight: '700',
        color: 'black',
        marginBottom: 10,

    },
    passWord_input: {
        fontFamily:'Poppins-Regular',
        fontSize: 14,
        fontWeight: '400',
        lineHeight: 21,
        width: '100%',
        height: 40,
        borderColor: '#7B7B7B',
        borderBottomWidth: 1,
        marginTop: 61,
        marginBottom: 13,

    },
    image: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        position: 'absolute',
        right: 0,
        bottom: 20,
    },
    iconImage: {
        tintColor: 'gray',
    },
    forget: {
        fontFamily:'Poppins-Regular',
        fontSize: 12,
        fontWeight: '400',
        lineHeight: 18,
        textAlign: 'right',
        color: '#7B7B7B',
        // marginTop: 15,
    },
    button: {
        flexDirection: 'row',
        justifyContent: "center",
        marginBottom: 88,
        marginTop: 120,
    },
    user: {
        fontSize: 12,
        fontWeight: '400',
        lineHeight: 18,
        textAlign: 'center',
        color: '#B9B9B9',
        marginBottom: 20
    },
    account: {
        fontSize: 12,
        fontWeight: '400',
        lineHeight: 18,
        color: '#1F62C6',
        textAlign: 'center',
        marginBottom:100,
    },
})