import {StyleSheet} from 'react-native';
import {theme} from '../../config/theme';

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.textColorWhite,
    margin: 10,
    borderWidth: 5,
    borderColor: theme.colors.primary,
    borderRadius: 30,
    padding: 3,
    position: 'relative',
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 24,
  },
  videoIcon: {
    zIndex: 999,
    position: 'absolute',
    backgroundColor: theme.colors.tosqa,
    padding: 3,
    borderRadius: 50,
    borderColor: theme.colors.textColorWhite,
    borderWidth: 3,
    bottom: -5,
    right: -5,
  },
});

export default styles;
