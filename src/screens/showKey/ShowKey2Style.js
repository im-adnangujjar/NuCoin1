import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
    container:{
        backgroundColor:'white',
        flex:1,
    },
    subContainer: {
        paddingHorizontal: 20
    },
    image: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 105,
    },
    walletLogo:{
        width:183,
        height:183,
    },
    description: {
        fontFamily:'Poppins-Regular',
        width: '100%',
        fontSize: 16,
        fontWeight: '400',
        color: 'black',
        marginTop: 44,
        // marginLeft:15,
        narginRight: 35
    },
    flex: {
        flexDirection: 'row',
        justifyContent: 'center'
    },
    button: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 138,
        marginBottom:50,
    },
})
