import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
    container: {
        marginHorizontal: 50,
        // paddingTop: 146,
    },
    title: {
        fontSize: 30,
        fontWeight: '700',
        marginBottom:10
    },
    input_title: {
        // font- family: Poppins;
        fontSize: 12,
        fontWeight: '400',
        color: '#7B7B7B',
        marginTop: 26,
        marginBottom: 13,
    },
    input: {
        width: '100%',
        height: 40,
        borderColor: 'blue',
        borderBottomWidth: 1,
        fontSize: 14,
        fontWeight: '700',
        color:'black',
    },
    passWord_input: {
        // font-family: Poppins;
        fontSize: 14,
        fontWeight: '400',
        lineHeight: 21,
        width: 295,
        height: 40,
        borderColor: '#7B7B7B',
        borderBottomWidth: 1,
        marginTop: 61,
        marginBottom: 13,

    },
    forget: {
        // fontFamily: Poppins;
        fontSize: 12,
        fontWeight: '400',
        lineHeight: 18,
        textAlign: 'right',
        color: '#7B7B7B',
        // marginTop: 15,
    },
    button: {
    flexDirection:'row',
    justifyContent:"center",
        marginBottom: 98,
        marginTop: 139,
    },
    user:{
        fontSize: 12,
        fontWeight: '400',
        lineHeight: 18,
        textAlign:'center',
        color: '#B9B9B9' ,
        marginBottom:'20%'

    },
    account: {
        fontSize: 12,
        fontWeight: '400',
        lineHeight: 18,
        color: '#1F62C6',
        textAlign:'center',
        marginTop:6,
        // marginBottom:106
    },
    // image:{
    //     flexDirection:'column',
    //     justifyContent:'center',
    //     aligItems:'center'
    // }

})