import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({

    container: {
        backgroundColor: 'white',
    },
    subContainer: {
        marginHorizontal: 19
    },
    image: {
        width: 82,
        height: 82
    },
    title: {
        fontFamily:'Poppins-Regular',
        fontSize: 22,
        fontWeight: '600',
        color: 'black',
        marginTop: 61

    },
    name: {
        fontFamily:'Poppins-Regular',
        fontSize: 16,
        fontWeight: '600',
        color: 'black',
    },
    information: {
        fontFamily:'Poppins-Regular',
        fontSize: 14,
        fontWeight: '400',
        color: 'black'
    },
    flex: {
        marginTop: 26,
        marginBottom: 18,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center'
    },
    iconBg: {
        width: 30,
        height: 30,
        backgroundColor: '#F3F2F3',
        borderRadius: 10,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    icon_flex: {
        marginLeft: '10%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '60%',

    },
    icon_bg: {
        width: 38,
        height: 38,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F3F2F3',
        borderRadius: 40,
    },
    text_flex: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '40%',
        alignItems: 'center'
    },
    text: {
        fontFamily:'Poppins-Regular',
        fontSize: 16,
        fontWeight: '600',
        color: 'black',
    },
    off_button: {
        fontFamily:'Poppins-Regular',
        fontSize: 16,
        fontWeight: '400',
        color: 'black',
    },

    kyc_flex: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 29,
        marginBottom: 20,
        marginRight: 20,
    },
    button: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius:10,
        width: '100%',
        height: 70,
        backgroundColor: 'blue',
        color: 'white',
        marginTop: 126,

    },
    log: {
        fontFamily:'Poppins-Regular',
        fontSize: 16,
        fontWeight: '500',
        color:'white'
    }
})
