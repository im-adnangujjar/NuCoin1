import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: 'white',
    marginBottom:30,
  },
  subContainer: {
    marginHorizontal: 19,
  },
  descripation: {
    fontFamily: 'Poppins-Medium',
    FontSize: 14,
    FontWeight: '400',
    LineHeight: 21,
    color: 'black',
    marginTop: 25,
  },
  completeText: {
    fontFamily:'Poppins-Bold',
    fontWeight:'700',
    color: '#40C16C',
  },
  text: {
    fontFamily: 'Poppins-Bold',
    color: '#FF2626',
    FontWeight: '700',

    
  },
  button: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 49,
    marginBottom: 70,
  },
});
