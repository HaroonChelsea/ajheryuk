import {StyleSheet} from 'react-native';
import {theme} from '../../config/theme';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  listItem: {
    backgroundColor: theme.colors.inputTextBackground,
    marginHorizontal: 10,
    borderRadius: 10,
    flexDirection: 'row',
    marginVertical: 5,
  },
  thumbnail: {
    margin: 10,
    flex: 1,
    height: 70,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: theme.colors.primary,
    borderRadius: 10,
  },
  body: {
    margin: 10,
    flex: 3,
  },
  itemTitle: {
    fontFamily: theme.fontFamilyWeight.SemiBold,
    color: theme.colors.textColorBlack,
    fontSize: 14,
  },
  itemDuration: {
    fontFamily: theme.fontFamilyWeight.Regular,
    fontSize: 14,
    color: theme.colors.textColorGray,
  },
});

export default styles;
