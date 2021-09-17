//import liraries
import React from 'react';
import {View, Text} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {theme} from '../../config/theme';
import styles from './style';

// create a component
const ListItem = () => {
  return (
    <View style={styles.container}>
      <View style={styles.listItem}>
        <View style={styles.thumbnail}>
          <Icon name="play" size={20} color={theme.colors.textColorWhite} />
        </View>
        <View style={styles.body}>
          <Text style={styles.itemTitle}>
            How to get feedback on their products in just 5 days
          </Text>
          <Text style={styles.itemDuration}>04:10m</Text>
        </View>
      </View>
    </View>
  );
};
export default ListItem;
