import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,

    backgroundColor: 'white',
    paddingHorizontal: 20,
  },
  subContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 60,
  },
  title: {
    fontFamily: 'Poppins-Bold',
    fontSize: 16,
    fontWeight: '700',
    color: 'black',
  },
  bgColor: {
    backgroundColor: '#47CED3',
    width: 17,
    height: 17,
    justifyContent: 'center',
    borderRadius: 20,
    alignItems: 'center',
    marginLeft: 7,
  },
  text: {
    fontFamily: 'Poppins-Regular',
    fontSize: 10,
    fontWeight: '400',
    lineHeight: 15,
    color: 'black',
  },
  align: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  line: {
    marginTop: -0,
    borderWidth: 0.5,
    borderColor: '#E7E7E7',
    borderBottomRadius: 3,
  },
  tabs: {
    borderWidth: 1,
    borderRadius: 5,
    marginTop: 12,
    borderColor: '#286ACC',
  },
});
