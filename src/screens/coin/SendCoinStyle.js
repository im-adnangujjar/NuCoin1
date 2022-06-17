import { StyleSheet } from 'react-native'
export const styles = StyleSheet.create({
    mainContainer: {
        backgroundColor: 'white',
    },
    subContainer: {
        marginHorizontal: '8%'
    },
    flex: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 67

    },
    title: {
        // fontFamily: Poppins;
        fontSize: 24,
        fontWeight: '700',
        textAlign: 'center',
        color: 'black', marginRight: 18

    }
    , image_bg: {
        width: '8%',
        height: 25,
        backgroundColor: 'green',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 56,
    },
    image: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 68,
    },
    transaction: {
        // font-family: Poppins;
        fontSize: 18,
        fontWeight: '600',
        textAlign: 'center',
        marginTop: 35,
        color: 'black',
        marginBottom: 16,
    },
    text: {
        // font-family: Poppins;
        fontSize: 16,
        fontWeight: '400',
        textAlign: 'center',
        marginBottom: 5,
        color: 'black'
    },
    button: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 68,

    }
})
