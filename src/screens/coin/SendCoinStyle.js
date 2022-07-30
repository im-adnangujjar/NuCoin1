import {StyleSheet} from 'react-native';
export const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: 'white',
  },
  subContainer: {
    marginHorizontal: '8%',
  },
  flex: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 67,
  },
  title: {
    fontFamily: 'Poppins-Bold',
    fontSize: 24,
    fontWeight: '700',
    textAlign: 'center',
    color: 'black',
    marginRight: 18,
  },
  check:{
width:12,
height:12,
  },
  logo1: {
    width: 183,
    height: 183,
  },
  image_bg: {
    width: '8%',
    height: 25,
    backgroundColor: '#40C16C',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 56,
  },
  image: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 68,
  },
  transaction: {
    fontFamily: 'Poppins-Bold',
    fontSize: 18,
    fontWeight: '600',
    textAlign: 'center',
    marginTop: 35,
    color: 'black',
    marginBottom: 16,
  },
  text: {
    fontFamily: 'Poppins-Regular',
    fontSize: 16,
    fontWeight: '400',
    textAlign: 'center',
    marginBottom: 5,
    color: 'black',
  },
  button: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop:Platform.OS === 'ios' ? 68 : 40
  },
});
