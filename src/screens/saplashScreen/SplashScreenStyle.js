import {StyleSheet, Platform} from 'react-native';

export const style = StyleSheet.create({
  container: {
    flex: 1,
    // marginBottom:100,
  },
  Text: {
    flexDirection: 'column',
    alignItems: 'center',
  },
  logo: {
    marginTop: Platform.OS === 'ios' ?-70 : -100,
    width:225,
    height:236,
  },
  welcom: {
    fontSize: 30,
    fontWeight: '400',
    lineHeight: 45,
    marginTop: 20,
    color: 'black',
    fontFamily: 'Poppins-Regular',
  },
  nuCion: {
    fontFamily: 'Poppins-Bold',
    fontSize: 30,
    fontWeight: '700',
    lineHeight: 45,
    textAlign: 'center',
    marginBottom: 10,
    color: 'black',
  },
  text: {
    fontFamily: 'Poppins-Regular',
    fontSize: 14,
    fontWeight: '400',
    lineHeight: 21,
    width: 214,
    textAlign: 'center',
    color: '#7B7B7B',
  },
  artificial: {
    fontFamily: 'Poppins',
    fontSize: 14,
    fontWeight: '700',
    textAlign: 'center',
    marginTop: 10,
    color: 'black',
  },
  button_margin: {
    marginTop: 33,
    marginBottom: 39,
  },
  agree: {
    // font-family: Poppins;
    fontSize: 12,
    fontWeight: '400',
    lineHeight: 18,
    textAlign: 'center',
    color: '#7B7B7B',
    marginTop: 30,
  },
  terms: {
    fontSize: 12,
    fontWeight: '400',
    lineHeight: 18,
    textAlign: 'center',
    color: '#1F62C6',
    marginBottom: 20,
  },
  NuGenesis: {
    fontFamily: 'Poppins-Regular',
    fontSize: 14,
    fontWeight: '400',
    lineHeight: 21,
    width: 214,
    textAlign: 'center',
    color: '#7B7B7B',
    marginBottom: 100,
  },
  color: {
    color: '#7B7B7B',
  },
});
