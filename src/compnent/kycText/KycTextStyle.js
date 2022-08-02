import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  imageFlex: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginTop: 20,
  },
  title: {
    fontFamily: 'Poppins-Regular',
    fontSize: 30,
    fontWeight: '700',
    color: 'black',
    marginRight: 18,
  },
  descripation: {
    fontFamily: 'Poppins-Medium',
    fontSize: 12,
    fontWeight: '400',
    color: 'black',
  },
  check: {
    width: 15,
    height: 15,
  },
  iconBg: {
    width: 25,
    height: 25,
    backgroundColor: '#40C16C',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 60,
  },
  text: {
    fontFamily: 'Poppins-Regular',
    fontSize: 18,
    fontWeight: '500',
    color: 'black',
  },
  flex: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 10,
  },
});
