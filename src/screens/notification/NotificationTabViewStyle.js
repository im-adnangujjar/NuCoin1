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
    alignItems: 'center',
    borderRadius: 20,
    marginLeft: 7,
  },
  align: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 6,
    borderColor: '#286ACC',
    paddingBottom: 14,
  },
  line: {
    marginTop: -0,
    borderWidth: 1,
    borderColor: 'black',
  },
  tabs: {
    paddingBottom: 14,
    borderBottomWidth: 5,
    borderColor: '#286ACC',
  },
});
