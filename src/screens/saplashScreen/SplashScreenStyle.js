import {StyleSheet, Platform} from 'react-native';

export const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    // marginBottom:100,
    paddingTop: 20,
  },
  Text: {
    flexDirection: 'column',
    alignItems: 'center',
  },
  logo: {
    marginTop: Platform.OS === 'ios' ? 160 : 160,
    width: 225,
    height: 236,
  },
  welcom: {
    fontSize: 30,
    fontWeight: '400',
    lineHeight: 45,
    marginTop: 60,
    color: 'black',
    fontFamily: 'Poppins-Regular',
  },
  nuCion: {
    fontFamily: 'Poppins-Bold',
    fontSize: 30,
    fontWeight: '700',
    lineHeight: 45,
    textAlign: 'center',
    marginBottom: 16,
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
    fontFamily: 'Poppins-Regular',
    fontSize: 12,
    fontWeight: '400',
    lineHeight: 18,
    textAlign: 'center',
    color: '#7B7B7B',
  },
  terms: {
    fontSize: 12,
    fontWeight: '400',
    lineHeight: 18,
    textAlign: 'center',
    color: '#1F62C6',
    marginBottom: 40,
  },
  NuGenesis: {
    fontFamily: 'Poppins-Regular',
    fontSize: 14,
    fontWeight: '400',
    lineHeight: 21,
    width: 214,
    textAlign: 'center',
    color: '#7B7B7B',
    marginBottom: 76,
  },
  color: {
    color: '#7B7B7B',
  },
});
