import React from 'react';
import {Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {theme} from '../../config/theme';
import ProfileImage from '../ProfileImage';
import Notification from '../Notification';
import styles from './style';
const Header = ({headTitle, messages, withBackground, online, image}) => {
  return (
    <View style={styles.container}>
      <ProfileImage
        online={online}
        image={image}
        withBackground={withBackground}
        style={styles.profile}
      />
      <View style={styles.detail}>
        <Text style={styles.headTitle}>{headTitle}</Text>
        {messages ? (
          <Text style={styles.messages}>2 new messages</Text>
        ) : (
          <View style={styles.points}>
            <Icon
              color={theme.colors.pointsColor}
              name="award"
              solid
              size={15}
            />
            <Text style={styles.point}>
              <Text
                style={{
                  ...styles.point,
                  fontFamily: theme.fontFamilyWeight.SemiBold,
                }}>
                +1600
              </Text>
              Points
            </Text>
          </View>
        )}
      </View>
      <Notification style={styles.notification} />
    </View>
  );
};

export default Header;
