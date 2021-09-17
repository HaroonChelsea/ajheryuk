import {StyleSheet} from 'react-native';
import {theme} from '../../config/theme';

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    backgroundColor: theme.colors.textColorWhite,
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  notifContainer: {
    position: 'absolute',
    right: 0,
  },
  notifCheck: {
    position: 'absolute',
    top: 1,
    right: 1,
  },
  notifCheckWhite: {
    top: 0,
    right: 0,
    position: 'absolute',
  },
});

export default styles;
