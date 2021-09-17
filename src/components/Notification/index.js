import React from 'react';
import {View} from 'react-native';
import styles from './style';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {theme} from '../../config/theme';

const ProfileImage = () => {
  return (
    <View style={styles.container}>
      <Icon name="bell" solid size={23} color={theme.colors.textColorBlack} />
      <View style={styles.notifContainer}>
        <Icon
          style={styles.notifCheckWhite}
          name="circle"
          size={10}
          color={theme.colors.textColorWhite}
        />
        <Icon
          style={styles.notifCheck}
          name="circle"
          solid
          size={8}
          color={theme.colors.primary}
        />
      </View>
    </View>
  );
};

export default ProfileImage;
