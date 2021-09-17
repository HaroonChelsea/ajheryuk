import {StyleSheet} from 'react-native';
import {theme} from '../../config/theme';

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.textColorWhite,
    flexDirection: 'row',
    width: '100%',
    paddingHorizontal: 20,
    alignItems: 'center',
    paddingVertical: 10,
  },
  detail: {
    flex: 1,
    paddingLeft: 10,
  },
  points: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  point: {
    color: theme.colors.pointsColor,
    marginLeft: 5,
    fontFamily: theme.fontFamilyWeight.Regular,
  },
  headTitle: {
    color: theme.colors.textColorBlack,
    fontFamily: theme.fontFamilyWeight.Bold,
  },
  messages: {
    color: theme.colors.textColorGray,
    fontFamily: theme.fontFamilyWeight.Regular,
  },
});

export default styles;
