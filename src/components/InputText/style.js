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
  passwordContainer: {
    width: '100%',
    position: 'relative',
  },
  iconContainer: {
    zIndex: 999,
    position: 'absolute',
    top: 20,
    right: 15,
  },
  passwordIcon: {
    width: 25,
    height: 25,
  },
});
export default styles;
