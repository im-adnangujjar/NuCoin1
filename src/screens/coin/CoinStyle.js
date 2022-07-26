import { StyleSheet } from 'react-native'
export const styles = StyleSheet.create({
    subContainer: {
        marginHorizontal: 20,
    },
    image: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 77,
        marginBottom:51,
    },
    title:{
        fontFamily: 'Poppins-Bold',
        fontSize: 24,
        fontWeight: '700',
       
        color: 'black',
    },
    flex: {
        marginTop:46,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
      },
    numbers: {
        fontFamily: 'Poppins-Medium',
        fontSize: 18,
        fontWeight: '500',
        color: 'black',
      },
      numbers1: {
        fontFamily: 'Poppins-Medium',
        fontSize: 12,
        fontWeight: '500',
        color: 'black',
      },
    input:{
        fontFamily:'Poppins-Regular',
        width: '100%',
        height: 58,
        borderColor: '#000000',
        borderWidth: 2,
        fontSize: 14,
        borderRadius:10,
        fontWeight: '700',
        paddingTop:18,
        paddingBottom:19,
        paddingLeft:28,
        marginBottom:20
    },
    button:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        marginTop:100,
        marginBottom:146
    }

})
