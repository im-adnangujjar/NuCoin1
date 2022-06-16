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
        // font-family: Poppins;
        fontSize: 16,
        fontWeight: '700',
        color:'black',
        marginTop:32
        
    },
    title: {
        // font-family: Poppins;
        fontSize: 12,
        fontWeight: '500',
        color:'green',
        marginLeft:33
    }
})

