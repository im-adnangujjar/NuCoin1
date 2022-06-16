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
    title: {
        // font-family: Poppins;
        fontSize: 16,
        fontWeight: ' 700',
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
        // font-family: Poppins;
        fontSize: 14,
        fontWeight: '500',
        color: 'blue',
        marginLeft: 20
    },
    flex: {
        flexDirection: 'row',
        alignItems: 'center'
    },
   
})
