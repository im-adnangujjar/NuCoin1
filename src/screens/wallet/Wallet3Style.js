import { StyleSheet } from 'react-native'
export const styles = StyleSheet.create({

    container: {
        backgroundColor: 'white'
    },
    subContainer: {
        marginHorizontal: 24,
    },
    bar: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 48,
    },
    image: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    image_margin: {
        marginRight: 23
    },
    title: {
        // font-family: Poppins;
        fontSize: 24,
        fontWeight: '700',

    },
    title_flex: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 46,
        marginBottom: 54,
    },
    numbers: {
        // font-family: Poppins;
        fontSize: 18,
        fontWeight: '500',
    },
    numbers1: {
        Weight:'500',
        Size: 12
    },
    input: {
        width: '100%',
        height: 58,
        borderColor: 'blue',
        borderWidth: 1,
        borderRadius: 10,
        paddingTop: 18,
        paddingBottom: 18,
        paddingLeft: 24,
        marginBottom: 20,
    },
    button_flex: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 129
    }
})