import {StyleSheet} from 'react-native';
import {theme} from '../../config/theme';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginHorizontal: 10,
    alignItems: 'center',
    marginVertical: 5,
  },
  detail: {
    flex: 1,
    paddingLeft: 10,
    alignItems: 'center',
    flexDirection: 'row',
    borderBottomColor: theme.colors.inputTextBackground,
    borderBottomWidth: 2,
  },
  body: {
    flex: 1,
    paddingVertical: 15,
  },
  info: {
    justifyContent: 'space-between',
    alignItems: 'flex-end',
  },
  username: {
    color: theme.colors.textColorBlack,
    fontSize: 16,
    fontFamily: theme.fontFamilyWeight.SemiBold,
  },
  message: {
    color: theme.colors.passwordIconColor,
    fontFamily: theme.fontFamilyWeight.Regular,
    fontSize: 14,
  },
  time: {
    color: theme.colors.passwordIconColor,
    fontFamily: theme.fontFamilyWeight.Regular,
    fontSize: 14,
  },
  numberOfCont: {
    width: 20,
    backgroundColor: theme.colors.blueColor,
    borderRadius: 50,
    height: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  numberOf: {
    color: theme.colors.textColorWhite,
    fontFamily: theme.fontFamilyWeight.Medium,
    fontSize: 10,
  },
});

export default styles;
