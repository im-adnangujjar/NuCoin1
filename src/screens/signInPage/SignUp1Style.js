import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
    container:{
backgroundColor:'white',
    },
  subContainer: {
        marginHorizontal: 50,
        paddingTop: 146,
    },
    title: {
        fontSize: 30,
        fontWeight: '700',
        marginBottom: 10
    },
    lable: {
        // font-family: Poppins;
        fontSize: 12,
        fontWeight: '400',
        color: '#7B7B7B',
        marginBottom: 13,
    },
    input: {
        width: '100%',
        height: 40,
        borderColor: '#CDCDCD',
        borderBottomWidth: 1,
        fontSize: 14,
        fontWeight: '700',
        color: 'black',
        marginBottom: 36

    },
    buttons: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        allignItems: 'cemter',
        marginBottom: 54
    },

    account: {
        fontSize: 12,
        fontWeight: '400',
        marginTop: 22,
        textAlign: 'center',
        color: '#B9B9B9'
    },
    log: {
        // font-family: Poppins;
        fontSize: 12,
        fontWeight: '400',
        marginBottom: 75,
        textAlign: 'center',
        marginTop: 6,
        color:'#1F62C6'
    },
    agree:{ 
        //  font-family: Poppins;
        fontSize: 12,
        fontWeight: '400',
        lineHeight: 18,
        textAlign:'center',
        color:'#7B7B7B',
        marginTop:76,
    },
    terms:{
        fontSize: 12,
        fontWeight: '400',
        lineHeight: 18,
        textAlign: 'center',
        color:'#1F62C6',
    },
    color:{
        color:'#7B7B7B',
    }
})