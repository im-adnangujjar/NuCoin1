import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  subContainer: {
    marginHorizontal: 40,
  },
  image: {
    tintColor: 'black',
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
    fontWeight: '500',
    color: 'black',
  },
  title1: {
    fontFamily: 'Poppins-Regular',
    fontSize: 14,
    fontWeight: '500',
    color: 'black',
  },
  text: {
    fontFamily: 'Poppins-Regular',
    fontSize: 10,
    fontWeight: '400',
    color:'#646464'
  },
});
