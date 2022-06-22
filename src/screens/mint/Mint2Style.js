import {StyleSheet} from 'react-native'

export const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
    },
    subContainer: {
        marginHorizontal: 19
    },
    title: {
        fontFamily:'Poppins-Regular',
        fontSize: 24,
        fontWeight: '700',
        color: 'black',
        marginTop: 36,
    },
    imagBg: {
        backgroundColor: '#F3F2F3',
        width: 140,
        height: 140,
        borderRadius: 100,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    imageCenter: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 38
    },
    button_align: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        marginTop: 35
    },
    button:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        marginTop:47,
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
        marginTop:45,
        marginBottom:30
    },

})

