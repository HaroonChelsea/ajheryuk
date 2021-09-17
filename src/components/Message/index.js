import React from 'react';
import {Text, View} from 'react-native';
import ProfileImage from '../ProfileImage';
import styles from './style';
const Message = ({message}) => {
  return (
    <View style={styles.container}>
      <ProfileImage image={message.userAvatar} online />
      <View style={styles.detail}>
        <View style={styles.body}>
          <Text style={styles.username}>{message.username}</Text>
          <Text style={styles.message}>{message.message}</Text>
        </View>
        <View style={styles.info}>
          <Text style={styles.time}>{message.time}</Text>
          {message.numberOf && (
            <View style={styles.numberOfCont}>
              <Text style={styles.numberOf}>{message.numberOf}</Text>
            </View>
          )}
        </View>
      </View>
    </View>
  );
};

export default Message;
