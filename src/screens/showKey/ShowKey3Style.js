import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
    },
    subContainer: {
        paddingHorizontal: 20,
    },
    title: {
        fontFamily:'Poppins-Regular',
        fontSize: 24,
        fontWeight: '700',
        lineHeight: 36,
        width: '80%',
        color:'black',
    },
    numbers: {
        fontFamily:'Poppins-Medium',
        fontSize: 18,
        fontWeight: '500',
        color: 'black',
    },
    numbers1: {
        fontFamily:'Poppins-Medium',
        fontSize: 12,
        fontWeight: '500',
    },
    flex: {
        flexDirection: 'row',
        justifyContent:'space-between',
        marginTop:46

    },
    input: {
        width: '100%',
        height: 58,
        borderColor: '#000000',
        borderWidth: 2,
        fontSize: 14,
        borderRadius: 10,
        fontWeight: '700',
        paddingTop: 18,
        paddingBottom: 19,
        paddingLeft: 28,
        marginTop: 45,
        marginBottom: 30
    },
    descripation1: {
        fontFamily:'Poppins-Regular',
        fontSize: 14,
        fontWeight: '500',
        color: 'red'
    },
    descripation: {
        fontFamily:'Poppins-Regular',
        fontSize: 14,
        fontWeight: '500',
        color: 'black'
    },
    again:{
        fontWeight: '700',
    },
    button: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 243,
        marginBottom:50
    },
})
