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
  title: {
    fontSize: 24,
    color: theme.colors.textColorBlack,
    padding: 0,
    fontFamily: theme.fontFamilyWeight.SemiBold,
  },
  subTitle: {
    padding: 0,
    fontSize: 16,
    color: theme.colors.textColorGray,
    textAlign: 'center',
    fontFamily: theme.fontFamilyWeight.Regular,
  },
  logoImage: {
    width: 165,
    height: 190,
  },
  headTextColor: {
    color: theme.colors.primary,
    fontSize: 50,
    fontFamily: theme.fontFamilyWeight.SemiBold,
    marginBottom: 10,
  },
  headText: {
    color: theme.colors.textColorBlack,
    fontSize: 50,
    fontFamily: theme.fontFamilyWeight.Regular,
  },
  getStartedBtnParent: {
    marginTop: 30,
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
});

export default styles;
