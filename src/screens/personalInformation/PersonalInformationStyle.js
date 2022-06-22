import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
    },
    subContainer: {
        marginHorizontal: 22,
    },

    iconImage:{
        tintColor:'black'
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
    iconBg1: {
        width: 30,
        height: 30,
        backgroundColor: '#32DCDF',
        borderRadius: 10,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    display:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
        marginTop:36
    },
    title: {
        fontFamily:'Poppins-Regular',
        fontSize: 22,
        fontWeight: '600',
        color: 'black',
        marginTop: 61
    },
    text: {
        fontFamily:'Poppins-Regular',
        fontSize: 14,
        fontWeight: '400',
        color: 'black',
        marginTop: 47
    },
    image: {
        width: 120,
        height: 120,
        marginTop: -18,


    },
    upload: {
        fontFamily:'Poppins-Regular',
        fontSize: 14,
        fontWeight: '400',
        textAlign: 'center',
        marginTop: 25,
        marginBottom: 23,
        color:'#40C16C'

    },
    flex: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    update: {
        fontFamily:'Poppins-Regular',
        fontSize: 14,
        fontWeight: '600',
        color: 'black',
        marginLeft:22
    },
    imageFlex:{
        flexDirection:'row',
        alignItems:'center',
        marginTop:49
    },
    iconFlex:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',width:'94%'
    }

})
