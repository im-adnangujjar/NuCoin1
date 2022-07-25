import { StyleSheet } from 'react-native'


export const styles = StyleSheet.create({
    mainContainer: {
        backgroundColor: 'white',
    },
    subContainer: {
        marginHorizontal: '5%'
    },
    image: {
        tintColor: "blue"
    },
    iconBg: {
        width: 30,
        height: 30,
        backgroundColor: '#F3F2F3',
        borderRadius: 10,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    bar: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 50,
    },
    image1: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    image_margin: {
        marginRight: 23
    },
    title: {
        fontFamily:'Poppins-Regular',
        fontSize: 16,
        fontWeight: '700',
        color: 'black',
        marginTop: 37,
        marginBottom: 17

    },
    buttonAlign:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 37

    },
    month:{
        fontFamily:'Poppins-Regular',
        fontSize: 14,
        fontWeight: '500',
        color: 'black',
        marginLeft: 20
    },
    bgButton: {
        width: '40%',
        height: 41,
        borderWidth: 1,
        borderColor: '#F3F2F3',
        borderRadius: 5
    },
    iconAlign: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        height:41,
        paddingLeft: 4,
        paddingRight: 4,
    },
    text: {
        fontFamily:'Poppins-Regular',
        fontSize: 14,
        fontWeight: '500',
        color: 'blue',
        marginLeft: 10
    },
    flex: {
        flexDirection: 'row',
        alignItems: 'center'
    },
   
})
