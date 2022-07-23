import { StyleSheet } from 'react-native'
export const styles = StyleSheet.create({
    Container: {
        backgroundColor: 'White',
    },
    card: {
        backgroundColor: '#F3F2F3',
        width: '100%',
        height: 99,
        borderRadius: 10,
        paddingTop: 19,
        paddingLeft: 23,
        paddingRight: 30,
        marginBottom:17

    },
    subContainer: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    image: {
        backgroundColor: 'white',
        width: 38,
        height: 38,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 50,
    },
    flex: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width:'79%'
    },
    container_margin: {
        marginLeft: 17
    },
    title: {
        fontFamily:'Poppins-Regular',
        fontSize: 14,
        fontWeight: '700',
        color:'#000000'
    },

    flex1: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginLeft:55,
        marginTop:8,
        width:'80%'

    },
    descripation: {
        fontFamily:'Poppins-Regular',
        fontSize: 12,
        fontWeight: '500',
        color:'#000000',
    

    }
})
