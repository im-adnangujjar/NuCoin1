import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white'
    },
    subContainer: {
        marginHorizontal: 24,
    },
    image: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    image_margin: {
        marginRight: 23
    },
    morning: {
        fontSize: 16,
        fontWeight: '400',
        marginLeft: 8,
    },
    name: {

        //    fontFamily: Poppins;
        fontSize: 30,
        fontWeight: '700',
        marginTop: 10,
        color: 'black'
    },
    flex: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 10
    },
    image_flex: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 30
    },

    title: {
        // font-family: Poppins;
        fontSize: 12,
        fontWeight: '400',
        marginRight: 18
    },
    list: {
        // font-family: Poppins;
        fontSize: 16,
        fontWeight: '700',
        color: 'black'

    },
    card: {
        marginTop: 20
    },
    button: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 33
    },
    modalBg: {
        backgroundColor: 'white',
        paddingHorizontal: 30,
        marginTop: 220,
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
