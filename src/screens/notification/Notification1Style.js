import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({

    container: {
        backgroundColor: 'white',
    },
    subContainer: {
        marginHorizontal: 19
    },
    image: {
        tintColor: 'black',
    },
    imageBg: {
        backgroundColor: '#F3F2F3',
        width: 38,
        height: 38,
        borderRadius: 40,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginRight:21

    },
    flex: {
        flexDirection: 'row',
        // justifyContent: 'space-between',
        alignItems: 'center',
        marginTop:49
    },
    title: {
        // font-family: Poppins;
        fontSize: 16,
        fontWeight: '500',
        color: 'black'
    },
    // font-family: Poppins;
    fontSize: 10,
    fontWeight: '400'
})
