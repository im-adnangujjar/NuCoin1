import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
    },
    subContainer: {
        marginHorizontal: 19
    },
    title: {
        fontFamily:'Poppins-Regular',
        fontSize: 20,
        fontWeight: '700',
        color: 'black'
    },
    center: {
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%'
    },
    flex: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 100,
    },
    align: {
        marginTop: 175,
        marginBottom:50,
    },
    text: {
        fontFamily:'Poppins-Regular',
        fontSize: 12,
        fontWeight: '400',
        lineHeight: 18,
        width: '70%',
        color: 'black',
        textAlign: 'center',
        marginTop: 14
    },

})
