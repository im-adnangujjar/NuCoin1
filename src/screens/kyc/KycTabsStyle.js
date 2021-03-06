import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingHorizontal: 20,
  },
  flex: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 45,
  },
  title: {
    fontFamily: 'Poppins-Bold',
    fontSize: 16,
    fontWeight: '700',
    lineHeight: 24,
    marginBottom: 11,
  },
  tabs: {
    borderBottomWidth: 4,
    borderColor: 'blue',
  },
  border: {
    borderBottomWidth: 1,
    marginTop: -0,
  },
});
