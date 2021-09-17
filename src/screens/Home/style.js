import {StyleSheet} from 'react-native';
import {theme} from '../../config/theme';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.textColorWhite,
  },
  header: {
    display: 'flex',
    flexDirection: 'row',
  },
  upcomingTitle: {
    marginVertical: 5,
    fontFamily: theme.fontFamilyWeight.Regular,
    color: theme.colors.textColorBlack,
    fontSize: 18,
    marginHorizontal: 10,
  },
  bold: {
    fontFamily: theme.fontFamilyWeight.SemiBold,
  },
  category: {
    fontSize: 14,
    fontFamily: theme.fontFamilyWeight.Medium,
    color: theme.colors.passwordIconColor,
  },
  activeCategory: {
    fontSize: 14,
    fontFamily: theme.fontFamilyWeight.Medium,
    color: theme.colors.textColorWhite,
  },
  activeCategoryItem: {
    backgroundColor: theme.colors.primary,
    color: theme.colors.textColorWhite,
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginHorizontal: 10,
    marginVertical: 5,
    borderRadius: 8,
  },
  categoryItem: {
    backgroundColor: theme.colors.inputTextBackground,
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginHorizontal: 10,
    marginVertical: 5,
    borderRadius: 8,
  },
});

export default styles;
