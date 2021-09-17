import {StyleSheet} from 'react-native';
import {theme} from '../../config/theme';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme.colors.backgroundColor,
  },
  logoImage: {
    width: 87,
    height: 100,
    marginBottom: 20,
  },
  getStartedBtnParent: {
    marginTop: 20,
    width: '100%',
  },
  getStartedBtn: {
    backgroundColor: theme.colors.primary,
    fontFamily: theme.fontFamilyWeight.Medium,
    fontSize: 16,
    color: theme.colors.textColorWhite,
    width: '100%',
    textAlign: 'center',
    borderRadius: 8,
    paddingVertical: 12,
  },
  forgotPassCont: {
    width: '100%',
  },
  forgotPass: {
    width: '100%',
    textAlign: 'center',
    fontFamily: theme.fontFamilyWeight.Medium,
    color: theme.colors.blueColor,
    marginTop: 10,
  },
  orContainer: {flexDirection: 'row', alignItems: 'center', marginTop: 10},
  or: {
    width: 50,
    textAlign: 'center',
    fontFamily: theme.fontFamilyWeight.Regular,
    color: theme.colors.textColorGray,
  },
  horizontalLine: {
    flex: 1,
    height: 1,
    backgroundColor: theme.colors.textColorGray,
  },
  facebookBtn: {
    marginTop: 10,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme.colors.blueColor,
    width: '100%',
    paddingVertical: 15,
    borderRadius: 6,
  },
  facebookBtnText: {
    color: theme.colors.textColorWhite,
    marginLeft: 10,
    fontFamily: theme.fontFamilyWeight.Regular,
  },
  googleBtn: {
    borderColor: '#EEEEEE',
    borderWidth: 1,
    marginTop: 10,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme.colors.inputTextBackground,
    width: '100%',
    paddingVertical: 15,
    borderRadius: 6,
  },
  googleBtnText: {
    color: theme.colors.black,
    marginLeft: 10,
    fontFamily: theme.fontFamilyWeight.Regular,
  },
  signupContainer: {
    backgroundColor: theme.colors.textColorWhite,
    textAlign: 'center',
    width: '100%',
    paddingVertical: 10,
  },
  signupText: {
    color: theme.colors.textColorGray,
    textAlign: 'center',
    fontFamily: theme.fontFamilyWeight.Regular,
  },
  signup: {
    color: theme.colors.blueColor,
    fontFamily: theme.fontFamilyWeight.Medium,
  },
});
export default styles;
