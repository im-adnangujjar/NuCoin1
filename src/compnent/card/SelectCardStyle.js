import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        height:'100%',
        paddingHorizontal:20,
    },
    bgColor: {
        backgroundColor: '#F3F2F3',
        width: '100%',
        height: 200,
        borderRadius: 20,
        paddingLeft: 24,
        paddingTop: 23
    },
    title: {
        fontFamily:'Poppins-Regular',
        fontSize: 14,
        fontWeight: '500',
        color: 'black',
    },
    flex: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    image: {
        marginRight: 18
    },
    text: {
        fontFamily:'Poppins-Regular',
        fontSize: 10,
        fontWeight: '500',
        color: 'black',
        marginRight: 17,
    },
    blance: {
        fontFamily:'Poppins-Regular',
        fontSize: 10,
        fontWeight: '400',
        color: 'black',
        marginTop: 13,
        marginBottom: 7,
    },
    coins: {
        fontFamily:'Poppins-Regular',
        fontSize: 20,
        fontWeight: '700',
        color: 'black',
        marginBottom: 22,
    },
    bundle: {
        fontFamily:'Poppins-Regular',
        fontSize: 12,
        fontWeight: '400',
        color: 'black'
    },
    aligns: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginRight: 20,
        marginTop: 10,
    },
})
