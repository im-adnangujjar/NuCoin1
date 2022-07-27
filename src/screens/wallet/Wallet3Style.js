import {StyleSheet} from 'react-native';
export const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
  },
  subContainer: {
    marginHorizontal: 24,
  },
  bar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 48,
  },
  image: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  image_margin: {
    marginRight: 23,
  },
  title: {
    fontFamily: 'Poppins-Bold',
    fontSize: 24,
    fontWeight: '700',
    color: 'black',
  },
  title_flex: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 46,
    marginBottom: 54,
  },
  numbers: {
    fontFamily: 'Poppins-Medium',
    fontSize: 18,
    fontWeight: '500',
    color:'black',

  },
  numbers1: {
    fontFamily: 'Poppins-Medium',
    Weight: '500',
    fontSize: 12,
    color:'black'
  },
  input: {
    width: '100%',
    height: 58,
    fontSize:14,
    fontFamily:'Poppins-Medium',
    color:'black',
    fontWeight:'500',
    borderColor: 'background: #000000',
    borderWidth: 1,
    borderRadius: 10,
    paddingTop: 18,
    paddingBottom: 18,
    paddingLeft: 24,
    marginBottom: 20,
  },
  image: {
    tintColor: 'black',
    position: 'absolute',
    right: 20,
    bottom: 35
},
  button_flex: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 129,
  },
});
