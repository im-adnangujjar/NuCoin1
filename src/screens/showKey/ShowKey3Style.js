import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
    },
    subContainer: {
        marginHorizontal: 19
    },
    title: {
        // font-family: Poppins;
        fontSize: 24,
        fontWeight: '700',
        lineHeight: 36,
        width: '80%',
        color:'black',
    },
    numbers: {
        // font-family: Poppins;
        fontSize: 18,
        fontWeight: '500',
        color: 'black',
    },
    numbers1: {
        // font-family: Poppins;
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
    descripation: {
        // font-family: Poppins;
        fontSize: 14,
        fontWeight: '700',
        color: 'black'
    },
    button: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 243
    },
})
