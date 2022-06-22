import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
    },
    subContainer: {
        marginHorizontal: 50,
    },

    title: {
        fontFamily:'Poppins-Regular',
        fontSize: 24,
        fontWeight: '700',
        color: 'black'
    },
    textFlex: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 39
    },
    imageBg: {
        width: 138,
        height: 134,
        backgroundColor: '#E7E7E7',
        borderRadius: 200,
        marginTop: 81,
    },
    imageCenter: {
        flexDirection: 'row',
        justifyContent: 'center',
    },
    input: {
        borderWidth: 1,
        borderRadius: 10,
        paddingLeft: 28,
        paddingRight: 19,
        marginTop: 80,
    },
    image: {
        tintColor: 'black',
        position: 'absolute',
        right: 10,
        bottom: 10
    },
    button: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 138
    },
})
