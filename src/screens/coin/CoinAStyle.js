import {StyleSheet} from 'react-native';
export const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: 'white',
  },
  subContainer: {
    marginHorizontal: 24,
  },
  image: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  flex: {
    marginTop:46,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  imageBg: {
    backgroundColor: '#F3F2F3',
    width: 140,
    height: 140,
    borderRadius: 100,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 77,
    marginTop: 88,
  },
  imageCenter: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  password: {
    fontFamily: 'Poppins-Regular',
    fontSize: 24,
    fontWeight: '700',
    color: 'black',
  },
  text: {
    fontFamily: 'Poppins-Bold',
    fontSize: 24,
    fontWeight: '700',
    // line-height: 36px;
    // letter-spacing: 0em;
    // text-align: left;S
    color: 'black',
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
    color: 'black',
  },
  input: {
    fontFamily: 'Poppins-Regular',
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
    marginBottom: 20,
  },
  button: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 136,
    marginBottom: 146,
  },
  icon: {
    tintColor: 'black',
    position: 'absolute',
    right: 10,
    bottom: 35,
  },
  eye: {
    position: 'absolute',
    right: 20,
    top: 22,
    tintColor: '#000000',
  },
});
