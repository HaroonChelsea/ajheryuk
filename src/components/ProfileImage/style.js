import {StyleSheet} from 'react-native';
import {theme} from '../../config/theme';

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    backgroundColor: theme.colors.inputTextBackground,
    borderRadius: 8,
    padding: 2,
  },
  profileImage: {
    width: 44,
    height: 44,
    borderRadius: 50,
  },
  onlineContainer: {
    position: 'relative',
  },
  onlineCheck: {
    position: 'absolute',
    bottom: 1,
    right: 1,
  },
  onlineCheckWhite: {
    bottom: 0,
    right: 0,
    position: 'absolute',
  },
});

export default styles;
