import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
    container: {
        backgroundColor: 'red',
    },
    subContainer: {
        backgroundColor: 'white',
        paddingHorizontal: 30,
        marginTop: 20,
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
        marginBottom: 28,
    },
})
