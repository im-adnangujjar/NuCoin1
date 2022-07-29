import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
  },
  subContainer: {
    marginHorizontal: 19,
  },
  title: {
    fontFamily: 'Poppins-Regular',
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
    justifyContent: 'center',
  },
  blockImage: {
    width: 128,
    height: 117,
  },
  imageCenter: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 38,
  },
  button_align: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginTop: 35,
  },
  card: {
    width: '100%',
    height: 81,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: '#E7E7E7',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingLeft: 22,
    paddingRight: 16,
    marginTop: 45,
    marginBottom: 51,
  },
  text: {
    fontFamily: 'Poppins-Medium',
    fontSize: 14,
    fontWeight: '500',
    color: 'black',
  },
  button: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 47,
    marginBottom: 50,
  },
});
