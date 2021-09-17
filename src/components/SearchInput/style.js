import {StyleSheet} from 'react-native';
import {theme} from '../../config/theme';

const styles = StyleSheet.create({
  inputText: {
    backgroundColor: theme.colors.inputTextBackground,
    paddingVertical: 15,
    borderRadius: 6,
    width: '100%',
    paddingHorizontal: 10,
    fontFamily: theme.fontFamilyWeight.Regular,
    marginVertical: 5,
  },
  conatiner: {
    position: 'relative',
    marginHorizontal: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconContainer: {
    backgroundColor: theme.colors.primary,
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 10,
    zIndex: 999,
    position: 'absolute',
    top: 12,
    right: 5,
  },
});
export default styles;
