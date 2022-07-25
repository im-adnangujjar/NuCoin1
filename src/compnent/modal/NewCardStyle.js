import { StyleSheet } from 'react-native'
export const styles = StyleSheet.create({
    modalBg: {
        backgroundColor: 'white',
        width: '100%',
        paddingHorizontal: 30,
        marginTop: 250,
        borderTopLeftRadius: 35,
        borderTopRightRadius: 35,
    },
    modalBg1: {
        backgroundColor: 'white',
        width: '100%',
        paddingHorizontal: 30,
        marginTop: Platform.OS === 'ios' ? 100 : 70,
        borderTopLeftRadius: 35,
        borderTopRightRadius: 35,
    },
    borderCenter: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    border: {
        marginTop: 10,
        width: '40%',
        borderWidth: 1,
    },
    wallet: {
        marginTop: 20,
    },
    button: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
})

