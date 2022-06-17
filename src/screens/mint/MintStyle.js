import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white'
    },
    subContainer: {
        marginHorizontal: 19
    },
    password: {
        // font-family: Poppins;
        fontSize: 24,
        fontWeight: '700',
        color: 'black'
    },
    numbers: {
        // font-family: Poppins;
        fontSize: 18,
        fontWeight: '500',
        color: 'black'
    },
    numbers1: {
        // font-family: Poppins;
        fontSize: 12,
        fontWeight: '500',
        color: 'black',
    },
    flex: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 36,
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
        paddingRight: 19,
        marginTop: 64
    },
    icon: {
        tintColor: 'black',
        position: 'absolute',
        right: 19,
        bottom: 15
    },
    text: {
        fontSize: 14,
        fontWeight: '500',
        color: 'black',
        marginTop: 27
    },
    button: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 200
    },
    modaleBg: {
        backgroundColor: 'white',
        borderRadius:20

    },
    iconColor: {
        tintColor: 'white',
    },
    iconBg: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'black',
        width: 32,
        height: 32,
        borderRadius: 50,
        tintColor: 'white'
    },
    modalText: {
        // font-family: Poppins;
        fontSize: 16,
        fontWeight: '500',
        color: 'black',
        marginLeft:'16%',
        marginRight:'14%',
        marginTop:27,
    },
    button1: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 30,
        marginBottom:54,
        marginLeft:10,
        marginRight:10,
    },
    align:{
        flexDirection:'row',
        justifyContent:"flex-end",
        marginRight:30,
        marginTop:18
    }
})

