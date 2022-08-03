import {StyleSheet} from 'react-native';
import {BorderlessButton} from 'react-native-gesture-handler';

export const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: 'white',
    paddingHorizontal: 20,
  },
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 110,
    width:'100%',
    height:200,
  },
  bgColor: {
    backgroundColor: 'white',
    width: 270,
    height: 270,
    borderRadius: 200,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontFamily: 'Poppins-Bold',
    fontSize: 20,
    fontWeight: '700',
    lineHeight: 30,
    color: 'black',
  },
  return: {
    fontFamily: 'Poppins-Bold',
    fontSize: 16,
    fontWeight: '400',
    lineHeight: 24,
    textAlign: 'center',
    color: 'black',
  },
  hours: {
    fontFamily: 'Poppins-Medium',
    fontSize: 16,
    fontWeight: '700',
    lineHeight: 24,
    textAlign: 'center',
    color: 'black',
  },
  barStyle: {
    marginTop: 60,
    alignItems: 'center',
  },
  number: {
    position: 'absolute',
    right: 35,
    bottom: 16,
    color: 'black',
  },
  barColor: {
    borderWidth: 3,
    borderRadius:20,
    borderColor: '#36DEDC',
    width: 15,
  },
  bar: {
    borderWidth: 1,
    borderRadius: 10,
    width: 250,
    backgroundColor:'#EFEFEF',
    borderColor: '#EFEFEF',
  },
  center: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    // marginTop: 100,
  },
  icon: {
    width: 24,
    height: 24,
  },
  text: {
    fontFamily: 'Poppins-Regular',
    fontSize: 12,
    fontWeight: '400',
    lineHeight: 18,
    width: '70%',
    color: 'black',
    textAlign: 'center',
    marginTop: 14,
  },
});
