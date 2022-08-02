import {Platform, StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  subContainer: {
    // marginHorizontal: 40,
  },
  image: {
    tintColor: 'black',
    width: 17,
    height: 20,
  },
  imageBg: {
    backgroundColor: '#F3F2F3',
    width: 38,
    height: 38,
    borderRadius: 40,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 21,
  },
  flex: {
    flexDirection: 'row',
    // justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 49,
  },
  title: {
    fontFamily: 'Poppins-Regular',
    fontSize: 16,
    width:Platform.OS==='ios'? '100%':'98%',
    fontWeight: '400',
    color: 'black',
  },
  jhon: {
    fontFamily: 'Poppins-Medium',
    fontSize: 16,
    fontWeight: '600',
    color: 'black',
  },
  title1: {
    fontFamily: 'Poppins-Regular',
    fontSize: 14,
    fontWeight: '500',
    color: 'black',
    width: Platform.OS==='ios'? '100%':'98%',
  },
  text: {
    fontFamily: 'Poppins-Medium',
    fontSize: 10,
    fontWeight: '400',
    color: '#646464',
  },
});
