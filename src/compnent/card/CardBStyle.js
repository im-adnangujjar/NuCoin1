import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({

    bgColor: {
        backgroundColor: '#F3F2F3',
        width: '100%',
        height: 'auto',
        marginTop: 10,
        borderRadius: 10,
        paddingLeft: 5,
        paddingRight: 5,
        marginBottom:10,
    },
    subContainer: {
        // marginBottom: 20,
        paddingLeft: 24,
        paddingTop: 24,
        paddingBottom: 10,
        borderRadius: 10
    },
    flex: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    image: {
        marginRight: 10,
        
    },
    title: {
        fontFamily:'Poppins-Regular',
        fontSize: 14,
        fontWeight: '500',
        color: 'black',
    },
    text: {
        fontFamily:'Poppins-Regular',
        fontSize: 10,
        fontWeight: '500',
        color: 'black'
    },
    blance: {
        fontFamily:'Poppins-Regular',
        fontSize: 10,
        fontWeight: '400',
        color: 'black',
        marginTop: 13,
    },
    number: {
        fontFamily:'Poppins-Regular',
        fontSize: 20,
        fontWeight: '700',
        color: 'black',
        marginTop: 5,
        marginBottom: 18,

    },
    copy: {
        fontFamily:'Poppins-Regular',
        fontSize: 10,
        fontWeight: '400',
        color: 'black',
        marginLeft: 18,
        marginRight: 4,
    },
    aligns: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 8
    },
    bundle: {
        fontFamily:'Poppins-Regular',
        fontSize: 12,
        fontWeight: '500',
        color: 'black',
        marginLeft: 70,
    },

    iconBg: {
        backgroundColor: 'green',
        width: 32,
        height: 32,
        borderRadius: 50,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    iconFlex: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '80%',
    },
    buttons: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignsitem: 'center',
    },

})
