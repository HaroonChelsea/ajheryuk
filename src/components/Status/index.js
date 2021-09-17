import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {Image, View} from 'react-native';
import styles from './style';
import {theme} from '../../config/theme';

const Status = ({status}) => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={status.image} />
      <View style={styles.videoIcon}>
        <Icon
          color={theme.colors.textColorWhite}
          solid
          name="video"
          size={15}
        />
      </View>
    </View>
  );
};

export default Status;
