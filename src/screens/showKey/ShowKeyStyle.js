import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  subContainer: {
    paddingHorizontal: 20,
  },

  title: {
    fontFamily: 'Poppins-Regular',
    fontSize: 24,
    fontWeight: '700',
    color: 'black',
  },
  textFlex: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 39,
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
  },
  imageBg: {
    width: 138,
    height: 134,
    backgroundColor: '#E7E7E7',
    borderRadius: 200,
    marginTop: 81,
  },
  blockImage: {
    width: 138,
    height: 147,
  },
  imageCenter: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  input: {
    width: '100%',
    height: 50,
    borderWidth: 1,
    borderRadius: 10,
    paddingLeft: 28,
    paddingRight: 19,
    marginTop: 80,
  },
  image: {
    tintColor: 'black',
    position: 'absolute',
    right: 10,
    bottom: 14,
    width:20,
    height:20,
  },
  button: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 138,
    marginBottom: 50,
  },
});
