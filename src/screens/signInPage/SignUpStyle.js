import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
    },
    subContainer: {
        marginHorizontal: 50,
        paddingTop: Platform.OS === 'ios' ? 146 : 50,
    },
    title: {
        color:'black',
        fontFamily:'Poppins-Bold',
        fontSize: 30,
        fontWeight: '700',
    },
    titleFlex: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 30

    },
    numbers: {
        fontFamily: 'Poppins-Medium',
        fontSize: 18,
        fontWeight: '500',
        color: 'black',
      },
      numbers1: {
        fontFamily: 'Poppins-Medium',
        fontSize: 12,
        fontWeight: '500',
      },
    lable: {
        // font-family: Poppins;
        fontSize: 12,
        fontWeight: '400',
        color: '#7B7B7B',
        marginBottom: 13,
    },
    input: {
        width: '100%',
        height: 40,
        borderColor: '#CDCDCD',
        borderBottomWidth: 1,
        fontSize: 14,
        fontWeight: '700',
        color: 'black',
        marginBottom: 36

    },
    image: {
        position: 'absolute',
        right: 0,
        bottom: 45,
        // tintColor:'#EAEAEA'
    },
    buttons: {
        width:'100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        allignItems: 'center',
        marginBottom: 54
    },

    account: {
        fontSize: 12,
        fontWeight: '400',
        marginTop: 22,
        textAlign: 'center',
        color: '#B9B9B9'
    },
    log: {
        // font-family: Poppins;
        fontSize: 12,
        fontWeight: '400',
        marginBottom: 75,
        textAlign: 'center',
        marginTop: 6,
        color: '#1F62C6'
    },

})
