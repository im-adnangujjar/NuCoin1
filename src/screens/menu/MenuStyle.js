import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({

    container: {
        backgroundColor: 'white',
    },
    subContainer: {
        marginHorizontal: '5%'
    },
    image: {
        width: 82,
        height: 82
    },
    title: {
        // font-family: Poppins;
        fontSize: 22,
        fontWeight: '600',
        color: 'black',
        marginTop: 61

    },
    name: {
        fontSize: 16,
        fontWeight: '600',
        color: 'black',
    },
    information: {
        fontSize: 14,
        fontWeight: '400',
        color: 'black'
    },
    flex: {
        marginTop: 26,
        marginBottom: 18,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center'
    },
    icon_flex: {
        marginLeft: '10%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    icon_bg: {
        width: 38,
        height: 38,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F3F2F3',
        borderRadius: 40,
    }
})
