import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({


    bgColor: {
        width: '100%',
        height: 111,
        backgroundColor: '#F3F2F3',
        marginTop: 21,
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 10,
        paddingLeft: 15,
        paddingRight: 15,
    },
    flex: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems:'center'
    },
    text:{
        fontFamily:'Poppins-Regular',
        fontSize: 16,
        fontWeight: '700',
        color:'black',
        marginTop:32
        
    },
    title: {
        fontFamily:'Poppins-Regular',
        fontSize: 12,
        fontWeight: '500',
        color:'#40C16C',
        marginLeft:33
    },
    iconflex:{
flexDirection:'row',
justifyContent:'space-between',
width:'100%'
    },
    iconBg:{
        width: 20,
        height: 20,
        backgroundColor: '#40C16C',
        flexDirection: 'row',
        justifyContent:'center',
        alignItems:'center',
        borderRadius:60,
    }
})

