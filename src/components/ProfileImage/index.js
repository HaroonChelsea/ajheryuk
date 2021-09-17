import React from 'react';
import {View, Image} from 'react-native';
import styles from './style';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {theme} from '../../config/theme';

const ProfileImage = ({online, withBackground, image}) => {
  return (
    <View
      style={
        withBackground
          ? {...styles.container}
          : {...styles.container, backgroundColor: theme.colors.textColorWhite}
      }>
      <Image style={styles.profileImage} source={image} />
      {online && (
        <View style={styles.onlineContainer}>
          <Icon
            style={styles.onlineCheckWhite}
            name="circle"
            size={10}
            color={theme.colors.textColorWhite}
          />
          <Icon
            style={styles.onlineCheck}
            name="circle"
            solid
            size={8}
            color={theme.colors.onlineColor}
          />
        </View>
      )}
    </View>
  );
};

export default ProfileImage;
